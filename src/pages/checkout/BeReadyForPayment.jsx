import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './Payment.css'
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setPaymentInfo } from '../../redux/slices/utilsSlice';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import useUserSecure from '../../hooks/useUserSecure';
import { fireConfetti } from '../../utils/confetti';

const BeReadyForPayment = ({ intent, cartIds, refetch, orderedItem }) => {

    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState('');

    const [downloadLink, setDownloadLink] = useState('');
    const [id, setId] = useState('');
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const [secureUser, isUserLoading] = useUserSecure();
    const axios = useAxiosFetch();



    useEffect(() => {


        // Check if id has been set and then trigger the download
        if (id) {
            // handleDownload();
        }
    }, [id]);

    const paymentId = pId => {
        console.log(pId)
        const handleDownload = async () => {
            try {
                // Fetch the blob data containing the invoice PDF using the updated id
                const response = await fetch(`http://localhost:5000/payment/food-item/${pId}`);
                const blob = await response.blob();

                // Create a URL for the blob and set it as the download link
                const url = window.URL.createObjectURL(blob);
                setDownloadLink(url);

                // Trigger the download
                const a = document.createElement('a');
                a.href = url;
                a.download = 'invoice.pdf';
                a.click();
            } catch (error) {
                console.error(error);
            }
        };
        handleDownload();
        console.log(downloadLink)
    }

    const handleSubmit = async (event) => {
        setMessage('');
        setLoading(true);
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) return;
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,


        });
        if (error) {
            console.log('[error] : ', error);
            toast.error(error.message);
        }
        else {
            // console.log('[PaymentMethod]', paymentMethod);
        }

        //  confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            intent,
            {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: user.displayName || 'Anonymous',
                        email: user.email || 'test@test.com',
                    },
                },
            },
        );
        if (confirmError) {
            toast.error(confirmError.message)
            setMessage(confirmError.message);
            setLoading(false);
        }
        else {
            // console.log('[PaymentMethod]', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                toast.success('Payment Successful');
                dispatch(setPaymentInfo(paymentIntent))
                const paymentData = {
                    paymentId: paymentIntent.id,
                    paymentAmount: paymentIntent.amount / 100,
                    paymentStatus: paymentIntent.status,
                    paymentMethod: paymentIntent.payment_method_types[0],
                    paymentDate: paymentIntent.created,
                    paymentCurrency: paymentIntent.currency,
                    userName: user.displayName || 'Anonymous',
                    userEmail: user.email,
                    userId: secureUser._id,
                    totalItems: cartIds.length,
                    orderedItem: orderedItem
                }
                axios.post('/payment/post-payment-info', paymentData)
                    .then(res => {
                        // console.log(res.data, 'payment info saved')
                        if (res.data.error) {
                            toast.error(res.data.error)
                            console.log(res.data.error)
                            return;
                        }
                        if (res.data) {
                            paymentId(res.data.result.insertedId)
                        }
                        setMessage(paymentIntent.status === 'succeeded' ? 'Payment Successful' : 'Payment Failed')
                        // TODO : replace this with base url
                        fetch(`https://hungry-bunny.vercel.app/payment/delete-cart-items`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ cartItems: cartIds })
                        })
                            .then(res => res.json())
                            .then(res => {
                                console.log(res, 'cart items deleted')
                                if (res.deletedCount > 0) {
                                    fireConfetti();
                                    refetch();
                                }
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
                    .finally(() => setLoading(false))

            }

        }
    };
    return (
        <form id='payment-form' onSubmit={handleSubmit}>
            <h3>Payment Details</h3>
            <p className='text-red-600'>{message}</p>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe | !intent | isUserLoading | loading}>
                {
                    loading ? <div className="px-2">
                        <AiOutlineLoading3Quarters className="animate-spin" />
                    </div> : 'Pay'
                }
            </button>
        </form>
    );
};

export default BeReadyForPayment;
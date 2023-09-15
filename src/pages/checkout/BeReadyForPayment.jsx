import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './Payment.css'
const BeReadyForPayment = ({ intent }) => {
    console.log(intent)
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
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
            console.log('[error]', error);
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        //  confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            intent,
            {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: 'Anonymous',
                        email: 'test@test.com',
                    },
                },
            },
        );
        if (confirmError) {
            console.log('[error]', confirmError);
        }
        else {
            console.log('[PaymentMethod]', paymentIntent);
        }

    };
    return (
        <form id='payment-form' onSubmit={handleSubmit}>
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
            <button type="submit" disabled={!stripe | !intent}>
                Pay
            </button>
        </form>
    );
};

export default BeReadyForPayment;
import React, { useEffect, useState } from 'react';
import useUtils from '../../hooks/useUtils';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import BeReadyForPayment from './BeReadyForPayment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const Payment = () => {
    const [intent, setIntent] = useState(null);
    const [loader, setLoader] = useState(false)
    const { totalPrice } = useUtils();
    console.log(totalPrice)
    const axios = useAxiosSecure();
    useEffect(() => {
        setLoader(true)
        axios.post('/payment/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data)
                setIntent(res.data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoader(false))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalPrice])

    if (loader) return <div className="h-screen w-full flex justify-center items-center">
        <AiOutlineLoading3Quarters className="text-5xl text-primary animate-spin" />
    </div>

    return (
        <div>
            <h1>Payment JSX</h1>
            <Elements stripe={stripePromise}>
                <BeReadyForPayment />
            </Elements>
        </div>
    );
};

export default Payment;
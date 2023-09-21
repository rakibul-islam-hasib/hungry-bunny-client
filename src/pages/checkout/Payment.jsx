import React, { useEffect, useState } from 'react';
import useUtils from '../../hooks/useUtils';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import BeReadyForPayment from './BeReadyForPayment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Navigate } from 'react-router-dom';
import { useFoodCart } from '../../hooks/userFoodCart';
import { useTitle } from '../../hooks/useTitle';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const Payment = () => {
    useTitle('Payment');
    const [intent, setIntent] = useState({});
    const [loader, setLoader] = useState(false);
    const { totalPrice } = useUtils();
    const axios = useAxiosSecure();
    const [cart = [], isLoading, refetch] = useFoodCart();
    useEffect(() => {
        setLoader(true)
        axios.post('/payment/create-payment-intent', { price: totalPrice })
            .then(res => {
                setIntent(res.data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoader(false))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalPrice])

    const cartIds = cart.map(item => item.cartIds)
    const flattenCartIds = cartIds.flat()
    const uniqueCartIds = [...new Set(flattenCartIds)]

    // Ordered Item And quantity
    const orderedItem = cart.map(item => {
        return {
            foodId: item.foodDetails._id,
            quantity: item.quantity,
            restaurantId: item.foodDetails.restaurant_id
        }
    })

    



    if (intent.error) return <Navigate to="/shop/next/checkout" />
    if (loader || isLoading) return <div className="h-screen w-full flex justify-center items-center">
        <AiOutlineLoading3Quarters className="text-5xl text-primary animate-spin" />
    </div>

    return (
        <div>
            <h1>Payment JSX</h1>
            <Elements stripe={stripePromise}>
                <BeReadyForPayment refetch={refetch} orderedItem={orderedItem} cartIds={uniqueCartIds} intent={intent.clientSecret} />
            </Elements>
        </div>
    );
};

export default Payment;
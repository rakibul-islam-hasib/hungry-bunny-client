import React, { useEffect, useMemo, useState } from 'react';
import { useFoodCart } from '../../hooks/userFoodCart';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useDispatch } from 'react-redux';
import { setTotalPrice } from '../../redux/slices/utilsSlice';
import { useNavigate } from 'react-router-dom';
import useUtils from '../../hooks/useUtils';

const Checkout = () => {
    const [cart = [], isLoading, refetch] = useFoodCart();
    const axios = useAxiosSecure();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { paymentInfo } = useUtils();
    const handleQuantityChange = (condition, item = []) => {
        console.log(item)
        // Get a random item from items array
        const randomItem = item[Math.floor(Math.random() * item.length)];

        // Implement increase quantity logic
        axios.put(`/cart/update/${randomItem}`, { quantity: condition })
            .then(res => {
                console.log(res.data)
                refetch() // refetch the cart when quantity is updated /-HASIB-/ 
            })
            .catch(err => console.log(err))
    };

    const onRemove = (item) => {
        // Implement remove item logic
    };


    const getTotalPrice = cart.reduce((acc, item) => acc + (item.foodDetails.price * item.quantity), 0).toFixed(2);

    // Sort the cart items by quantity
    const sortedCart = useMemo(() => {
        return cart.sort((a, b) => b.quantity - a.quantity);
    }, [cart]);



    useEffect(() => {
        dispatch(setTotalPrice(getTotalPrice))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, getTotalPrice])

    useEffect(() => {
        if (paymentInfo) {
            console.log(paymentInfo)
        }

    }, [paymentInfo])


    if (isLoading)
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <AiOutlineLoading3Quarters className="text-5xl text-primary animate-spin" />
            </div>
        );

    return (
        <div className="my-4">
            <h1 className="text-3xl font-bold text-center">Checkout</h1>
            <div className="border-b mb-6 pb-5 border-gray-400">
                <p className="text-center text-sm">
                    You can review your cart items here and increase or decrease
                    quantities. Your next step is payment.
                </p>
            </div>
            {
                cart.length === 0 ? <div className="">
                    <h1>Your cart is empty</h1>
                </div> : <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2 font-semibold">Item</th>
                            <th className="border p-2 font-semibold">Price</th>
                            <th className="border p-2 font-semibold">Quantity</th>
                            <th className="border p-2 font-semibold">Total</th>
                            <th className="border p-2 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCart.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border p-2">
                                    <div className="flex items-center">
                                        <img
                                            className="w-[100px] h-[90px]"
                                            src={item.foodDetails.image}
                                            alt=""
                                        />
                                        <span className="ml-2 text-xl font-semibold">
                                            {item.foodDetails.food_name}
                                        </span>
                                    </div>
                                </td>
                                <td className="border p-2 text-primary">
                                    {item.foodDetails.price}৳
                                </td>
                                <td className="border p-2">
                                    <div className="flex items-center">
                                        <button
                                            className="border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-200"
                                            onClick={() => handleQuantityChange('minus', item.cartIds)}
                                        >
                                            <FaMinus />
                                        </button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button
                                            className="border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-200"
                                            onClick={() => handleQuantityChange('plus', item.cartIds)}
                                        >
                                            <FaPlus />
                                        </button>
                                    </div>
                                </td>
                                <td className="border p-2 text-red-500 font-bold">
                                    {(item.foodDetails.price * item.quantity).toFixed(2)}
                                </td>
                                <td className="border p-2">
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => onRemove(item)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
            <div className="">
                <h1 className="text-2xl font-bold text-center">Total: ৳{cart.reduce((acc, item) => acc + (item.foodDetails.price * item.quantity), 0).toFixed(2)}</h1>
                {/* Pay btn */}
                <div className="flex justify-center mt-4">
                    <button onClick={() => navigate('/next/payment')} disabled={getTotalPrice <= 0} className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">
                        Pay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

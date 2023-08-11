import React from 'react';
import delivery_boy from '../../../assets/img/delivery_boy.png';
import './css/PopularFood.css'


const PopularFood = () => {
    return (
        <div
            className='flex flex-col md:flex-row justify-center mx-auto w-[90%] py-4 border rounded-lg shadow-lg  from-blue-500 to-purple-500'
            style={{ maxWidth: '1200px' }}
        >
            <div className='w-full md:w-1/2 p-8'>
                <h1 className='text-5xl font-bold  mb-4'>
                    Super Fast Delivery Time
                </h1>
                <p className=' text-lg'>
                    We offer you super fast delivery with our team. Our team is so
                    responsible. To order your food from your favorite shop, just sign up
                    and order your favorite one.
                </p>
                <div className="custom-btn flex mt-6">
                    <button className="w-full md:w-auto md:mr-4"> Explore Now
                        <span></span>
                    </button>
                    <button className="w-full md:w-auto"> Explore Now
                        <span></span>
                    </button>
                </div>
            </div>
            <div className='w-full md:w-1/2 p-8'>
                <img
                    className='h-[350px] rounded-full shadow-xl transform hover:scale-110 transition duration-500 ease-in-out'
                    src={delivery_boy}
                    alt='Delivery Boy'
                />
            </div>
        </div>
    );
};

export default PopularFood;
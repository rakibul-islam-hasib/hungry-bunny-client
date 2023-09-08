import React from 'react';
import { GrMail } from 'react-icons/gr';

const NewsLetter = () => {
    return (
        <div className='w-full py-6 md:py-4 lg:py-3 bg-primary'>
            <div className="w-[90%] md:flex justify-between items-center text-white dark:text-gray-200 mx-auto">
                <div className="">
                    <div className='text-xl inline-flex items-center gap-2 font-bold'>
                        <GrMail className='text-2xl mb-[2px]' /> Subscribe to our newsletter
                    </div>
                </div>
                <div className="my-3 md:m-0">
                    <h1>Shopping First For Coupon $25 Receive And...</h1>
                </div>
                <div className="relative">
                    <input
                        type="email"
                        className='w-full lg:w-[300px] dark:bg-gray-200 py-3 pl-4 text-black rounded-lg'
                        placeholder='Your Email Address'
                    />
                    <button className='absolute bg-black hover:bg-primary duration-200 text-white font-bold py-2 rounded-lg px-2 right-1 top-1'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
import React from 'react';
import delivery_boy from '../../../assets/img/delivery_boy.png';
const PopularFood = () => {
    return (
        <div className='flex justify-center mx-auto w-[90%] py-4 border '>
            <div className="w-1/2">
                <h1 className='text-5xl font-bold'>Super First Delivery Time</h1>
                <p>We offer you supper first delivery with our team . Our team is so responsible . To order order your food from your favorite shop just sign up and order your favorite one</p>
            </div>
            <div className="">
                <img className='h-[350px]' src={delivery_boy} alt="" />
            </div>
        </div>
    );
};

export default PopularFood;
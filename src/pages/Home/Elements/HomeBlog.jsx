import React from 'react';

const HomeBlog = () => {
    return (
        <div className='p-[28px] pt-16 mt-16 bg-rounded-lg pb-16 border-2 border-orange-400'>
            <h1 className='text-center text-4xl text-bold text-orange-600'>Inspirational stories</h1>
            <h2 className='text-center text-3xl mt-4 mb-6 text-black'>
            Indulge in Culinary Convenience: Savor the Flavors without Leaving Home!
</h2>
            <div className='md:flex lg:flex'>
                <div className='md:w-[60%]'>
                    <img className='rounded-2xl' src="https://cdn.pixabay.com/photo/2020/05/25/08/40/food-delivery-5217579_640.png" alt="" />
    
                </div>
                 <div className='md:w-[40%] text-center'>
                    <img className='mb-10 w-96 rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqizoF46jxjhnHHYUfeNdfKkaFQMTYn7_eVAjfiZQEHb9HYYCmZwH6pUvdPdDKnpWTDc&usqp=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" alt="" />
                    <h2 className='md:pr-20'>I recently had the pleasure of using FoodEaze, and I must say it&apos;s been an absolute game-changer for my dining experience. As a busy professional, I often find myself too tired to cook after a long day. FoodEaze has stepped in to fill that gap, and I&apos;m thoroughly impressed.</h2>
                    
                 </div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center mx-auto mt-16">
                 Read more Blog 
                </button>
        </div>
    );
};

export default HomeBlog;
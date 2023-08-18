import React from 'react';
import './css/Hero.css';
import playIcon from '../../../assets/icons/play.svg';
import fastFood from '../../../assets/img/fast-food.png';

const Hero = () => {
  return (
    <section className='h-screen'>
      <div className=" w-[90%] mx-auto">
        <div className=" mt-14   h-full space-y-4">

          <div className="logo text-center">
            <h1 className='text-8xl font-bold dark:text-gray-100'><span className='text-primary'>Hungry</span> Bunny</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1 className='text-5xl text-orange-500 font-bold'>Fast</h1>
            <div className="dark:text-white leading-4 text-black">
              <h1 className='text-xl font-bold leading-3'>Food</h1>
              <h1 className='text-xl font-bold'>Delivery</h1>
            </div>
          </div>
          <p className='text-gray-500 text-center'>Imagine your hunger being met at warp speed. Our &quot;Supper First Delivery&quot; isn&apos;t just about delivering food; it&apos;s about delivering delight.</p>

          {/* Search Box */}
          <div className="mt-6 flex  items-center w-[70%] mx-auto">
            <input
              type="text"
              placeholder="Search for products, services, and more"
              className="px-4 py-4 text-xl border outline-none  border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 w-full" />
            {/* <button className="px-4 py-2 text-white font-bold bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
              Search
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

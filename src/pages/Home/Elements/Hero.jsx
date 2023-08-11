import React from 'react';
import './css/Hero.css';

const Hero = () => {
  return (
    <section className='h-screen'>
      <div className="grid grid-cols-2 w-[90%] mx-auto">
        <div className="">
          <div className="flex">
            <h1 className='text-8xl text-orange-500 font-bold'>Fast</h1>
            <div className="">
              <h1 className='text-4xl font-bold'>Food</h1>
              <h1 className='text-4xl font-bold'>Delivery</h1>
            </div>
          </div>
          <p className='text-gray-500'>Imagine your hunger being met at warp speed. Our &quot;Supper First Delivery&quot; isn&apos;t just about delivering food; it&apos;s about delivering delight.</p>
          <button className='hero-btn'>
            <span className='text-white'>Order Now</span>
          </button>

        </div>
        <div className="">
          <p className="">Twe</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
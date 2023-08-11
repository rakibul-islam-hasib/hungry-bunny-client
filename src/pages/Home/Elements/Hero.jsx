import React from 'react';
import './css/Hero.css';
import playIcon from '../../../assets/icons/play.svg';


const Hero = () => {
  return (
    <section className='h-screen'>
      <div className="grid grid-cols-2 w-[90%] mx-auto">
        <div className="flex flex-col mt-14 justify-center items-start h-full space-y-4">
          <div className="flex">
            <h1 className='text-8xl text-orange-500 font-bold'>Fast</h1>
            <div className="">
              <h1 className='text-4xl font-bold'>Food</h1>
              <h1 className='text-4xl font-bold'>Delivery</h1>
            </div>
          </div>
          <p className='text-gray-500'>Imagine your hunger being met at warp speed. Our &quot;Supper First Delivery&quot; isn&apos;t just about delivering food; it&apos;s about delivering delight.</p>

          <div className="flex gap-3">
            <button className=' px-7 py-4 text-xl font-bold text-white rounded-full bg-orange-500 '>Order Now</button>
            <button className='flex justify-center items-center text-xl font-bold'>
              <img src={playIcon} className='h-16 w-16' alt="" />
              <span>Watch Video</span>
            </button>
          </div>



        </div>
        <div className="">
          <p className="">Twe</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
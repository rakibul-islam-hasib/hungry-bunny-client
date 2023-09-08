import React, { useEffect } from 'react';
import './css/Hero.css';
import playIcon from '../../../assets/icons/play.svg';
import fastFood from '../../../assets/img/fast-food.png';
import { heroCategory } from '../../../utils';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { setHero } from '../../../redux/slices/utilsSlice';

const Hero = () => {

  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger once when the component comes into view
  });

  useEffect(() => {
    if (inView) {
      dispatch(setHero(true))
    }
    else {
      dispatch(setHero(false))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);


  return (
    <section ref={ref} className='h-screen'>
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
      <div className="mt-5">
        <h1 className='capitalize text-3xl font-bold mb-3 text-center  '>Some of our <span className='text-primary'>popular food list </span></h1>
        <div className="hidden md:flex justify-between flex-wrap">
          {
            heroCategory.map(item => <div key={item.id}
              className='border rounded-2xl hover:border-primary duration-300 hover:bg-primary hover:bg-opacity-5 border-orange-300 px-16 py-6'
            >
              <div className="text-center ">
                <img src={item.image} className='w-[50px]' alt="" />
                <h1>{item.name}</h1>
              </div>
            </div>)
          }
        </div>
      </div>
    </section>
  );
};

export default Hero;

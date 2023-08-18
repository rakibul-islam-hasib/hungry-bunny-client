import React, { useEffect, useRef } from 'react';
import './css/Hero.css';
import playIcon from '../../../assets/icons/play.svg';
import fastFood from '../../../assets/img/fast-food.png';
import { BiCurrentLocation } from 'react-icons/bi';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const searchBoxRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for the title
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out',
    });

    // GSAP Animation for the search box
    gsap.from(searchBoxRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section className='h-screen flex items-center'>
      <div className="grid w-[90%] mx-auto">
        <div className="flex flex-col mt-14 justify-center items-start h-full space-y-4" ref={heroRef}>
          <div className="flex" ref={titleRef}>
            <h1 className='text-8xl text-orange-500 font-bold'>Fast</h1>
            <div className="">
              <h1 className='text-4xl font-bold'>Food</h1>
              <h1 className='text-4xl font-bold'>Delivery</h1>
            </div>
          </div>

          <div className="border w-full" ref={searchBoxRef}>
            <div style={{ borderWidth: '2px' }} className="relative animated-border">
              <input type="text" placeholder='Search your food.....' className='px-4 outline-none w-full py-3' />
              <span className='absolute right-3 top-3'>
                <BiCurrentLocation className='text-2xl' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

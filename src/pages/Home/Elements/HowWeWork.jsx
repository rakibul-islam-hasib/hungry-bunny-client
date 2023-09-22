import React, { useEffect } from 'react';
import 'aos/dist/aos.css';// Import AOS CSS
import illustration from '../../../assets/img/work/illustration-1.png';
import illustration2 from '../../../assets/img/work/illustration-2.png';
import illustration3 from '../../../assets/img/work/illustration-3.png';
import Aos from 'aos';

const steps = [
  {
    id: 1,
    step: '01',
    image: illustration,
    title: 'Select Restaurant',
    description:
      'First Select your favorite restaurant. Make sure you are signed in with your account on our website. Then our intelligent system will suggest nearby restaurants.',
    animation: 'fade-up', // First animation type
  },
  {
    id: 2,
    step: '02',
    image: illustration2,
    title: 'Select Menu',
    description:
      'After successfully choosing your favorite restaurant, select your favorite food. Then choose your preferred payment method for payment. Now follow the next step.',
    animation: 'fade-left', // Second animation type
  },
  {
    id: 3,
    step: '03',
    image: illustration3,
    title: 'Wait for Delivery',
    description:
      'Okay, great! You have successfully placed your first order. Now, just wait for 30 minutes. Our delivery team will meet you within 30 minutes with your awesome food.',
    animation: 'fade-right', // Third animation type
  },
];

const HowWeWork = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='my-24'>
      <h1 className='text-center mb-9 text-5xl font-bold'>
        How We <span className='text-primary'>Work</span>
      </h1>

      <div className='flex flex-col md:flex-row justify-center md:space-x-14 items-center'>
        {steps.map((step) => (
          <div
            key={step.id}
            className='flex w-full md:w-[300px] flex-col justify-center items-center text-center mb-10 md:mb-0'
            data-aos={step.animation} // Specify the AOS animation here
          >
            <img src={step.image} alt='' />
            <div className='flex items-end mt-3'>
              <span className='text-5xl text-gray-400 font-bold'>
                {step.step}
              </span>
              <h2 className='text-2xl font-bold'>{step.title}</h2>
            </div>
            <div className='w-[80%] mx-auto mt-2'>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;

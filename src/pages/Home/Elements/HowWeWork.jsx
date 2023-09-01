import React from 'react';
import illustration from '../../../assets/img/work/illustration-1.png';
import illustration2 from '../../../assets/img/work/illustration-2.png';
import illustration3 from '../../../assets/img/work/illustration-3.png';

const steps = [
  {
    id: 1,
    step: '01',
    image: illustration,
    title: 'Select Restaurant',
    description:
      'First Select yor favorite restaurant . Make sure you are sign in with your account in our website . Then our intellisense is suggest you your nearby restaurants',
  },
  {
    id: 2,
    step: '02',
    image: illustration2,
    title: 'Select Menu',
    description:
      'After successfully choosing your favorite restaurant . Then you need to select your favorite food . Then select your favorite payment method for payment . Now follow the next step',
  },
  {
    id: 3,
    step: '03',
    image: illustration3,
    title: 'Wait for delivery',
    description:
      'Ok , great you have successfully place your first order. Now just waite for 30 minute . Our delivery team will be meet you within 30 minute with your awesome food',
  },
];

const HowWeWork = () => {
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
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie';
import animationData from '../../../src/assets/icons/animation_llczs6cf.json'

const Contact = () => {

  const form = useRef();

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c94376o', 'template_o2fszsj', form.current, 'neL30gMG_srSB9Fpn')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  };
  return (
    <div className=''>
      <h2 className='text-2xl text-center font-bold uppercase mt-10 mb-8'>Get in Touch with Us</h2>
      <p className='text-center'>Have a question or feedback about our food delivery services?  We&apos;re here to help! Our dedicated customer <br /> support team is available to assist you with any inquiries you may have. Whether you need assistance with <br /> your order, have dietary preferences, or want to share your thoughts, feel free to reach out to <br /> us. Your satisfaction is our priority, and we&apos;re committed to providing you with a seamless and <br /> delightful food delivery experience. Contact us today and let us serve you better.</p>
      <div className='flex justify-evenly mb-10'>

        <h3 className='flex  items-center text-2xl font-sans mt-5'><span className='mr-3'>icon</span> <span>(+880) 1880107...</span></h3>
        <h3 className='flex  items-center text-2xl font-serif mt-5'><span className='mr-3'>icon</span> <span><a href="" target='blank'>Bashundara road 120/A</a></span></h3>
        <h3 className='flex  items-center text-2xl font-serif mt-5'><span className='mr-3'>icon</span> <span><a href="" target='blank'>community</a></span></h3>
      </div>
      <div className='md:flex w-full'>


        <div className='w-[50%]'>
          <form ref={form} onSubmit={sendEmail} className='items-center'>
            <input type="text" name="name" className='rounded-full border border-white mb-5 p-4 w-full' placeholder='name' /><br />
            <input type="email" name="email" className='rounded-full  mb-5 p-4 w-full' placeholder='email' /><br />
            <textarea name="message" placeholder='message' className='rounded-full w-full mb-5 p-4' /><br />
            <input type="submit" className=' rounded-3xl text-center bg-orange-600 w-full hover:bg-orange-700 mt-8 text-white font-bold py-2 px-4' value="Send" />
          </form>
        </div>
        <div className='w-[50%]'>
          <Lottie options={lottieOptions} />

        </div>



      </div>
    </div>
  );
};

export default Contact;
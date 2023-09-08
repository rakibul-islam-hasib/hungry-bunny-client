import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie';
import animationData from '../../../src/assets/icons/animation_llczs6cf.json'
import { FaMobileAlt, FaMapMarkerAlt, FaRocketchat } from "react-icons/fa";

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
    <div className='dark:text-slate-200'>
      <h2 className='text-2xl text-center font-bold uppercase mt-10 mb-8'>Feel free to send us any feedback</h2>
      <p className='text-center sm:mr-10 sm:ml-10 md:mr-32 md:ml-32'>Have a question or feedback about our food delivery services?  We&apos;re here to help! Our dedicated customer support team is available to assist you with any inquiries you may have. Whether you need assistance with your order, have dietary preferences, or want to share your thoughts, feel free to reach out to us. Your satisfaction is our priority, and we&apos;re committed to providing you with a seamless and delightful food delivery experience. Contact us today and let us serve you better.</p>
      <div className='flex justify-evenly mb-10'>

        <h3 className='flex  items-center text-2xl font-sans mt-5'><span className='mr-3 '><FaMobileAlt className='text-orange-500'></FaMobileAlt> </span> <span>(+880) 1880107...</span></h3>
        <h3 className='flex  items-center text-2xl font-serif mt-5'><span className='mr-3'> </span><FaMapMarkerAlt className='text-orange-500'></FaMapMarkerAlt> <span> Bashundara road 120/A</span></h3>
        <h3 className='flex  items-center text-2xl font-serif mt-5'><span className='mr-3'><FaRocketchat className='text-orange-500'></FaRocketchat> </span> <span> community</span></h3>
      </div>
      <div className='md:flex w-full'>


        <div className='w-[50%]'>
          <form ref={form} onSubmit={sendEmail} className='items-center'>
            <input type="text" name="name" className='rounded-full border border-white mb-5 p-4 w-full' placeholder='name' /><br />
            <input type="email" name="email" className='rounded-full  mb-5 p-4 w-full' placeholder='email' /><br />
            <textarea name="message" placeholder='message' className='rounded-full w-full mb-5 p-4' /><br />
            <input type="submit" value="send" className="text-center hover:transition hover:duration-400 rounded-3xl drop-shadow-lg pt-2 pb-2 font-bold text-3xl bg-orange-500 w-full text-white border-2 border-orange-500 hover:text-orange-500 hover:bg-white" />

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
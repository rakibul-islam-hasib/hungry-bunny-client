import React from 'react';
import { FaBook, FaCartPlus, FaWallet  } from 'react-icons/fa';
import { FcCollaboration, FcMenu } from 'react-icons/fc';

const UserWelcome = () => {
    return (
        <div className='mt-10 sm:text-center'>
            <h1 className='text-4xl text-orange-500 font-bold'>Welcome back Hungry Bunny</h1>
<div className='md:flex md:w-[100%] justify-between mr-9 mb-7 mt-10 md:space-x-10 sm:mb-5'>
<div className='text-center bg-gradient-to-r from-cyan-500 to-blue-500 pt-8 pb-8 pr-20 pl-20 rounded-2xl text-white'>
  <p className='text-6xl'>number</p>
  <p className='text-4xl font-bold flex text-white'><span><FcMenu/> </span> <span>MENU</span></p>
</div>
<div className='text-center bg-gradient-to-r from-pink-500 to-purple-500 pt-8 pb-8 pr-20 pl-20 rounded-2xl text-white'>
  <p className='text-6xl'>number</p>
  <p className='text-4xl font-bold'><span> </span> <span>DELIVERY</span></p>
</div>
<div className='text-center bg-gradient-to-r from-red-400 to-pink-500 pt-8 pb-8 pr-20 pl-20 rounded-2xl text-white'>
  <p className='text-6xl'>number</p>
  <p className='text-4xl font-bold'><span>icon</span> <span>CONTACT</span></p>
</div>
</div>

{/* add image and history */}
<div className='uppercase md:flex'>
<div className='md:w-[50%] hover:border-4 border-pink-500  md:pr-48 md:pl-48 md:pt-32 md:pb-36 bg-pink-100 rounded-lg mr-7'>
  <img src="https://images.generated.photos/tqxuE1n5ftUrNlNfdBHGisGdg3s65fV_qbj34-AXEag/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDUyOTkxLmpwZw.jpg"
   className='rounded-full' alt="" />
  <h3 className='text-4xl font-bold mt-7'>user name</h3>
</div>
<div className='md:w-[50%] sm:text-center sm:pl-5 hover:border-4 border-orange-500 md:pr-32 md:pl-32 md:pt-32 md:pb-32 bg-orange-100 rounded-lg mr-7'>
  <h2 className='text-4xl font-bold mb-10'>see your activities</h2>
  <h2 className='text-2xl font-bold mb-3 flex'><span className='mr-3'><FaCartPlus/> </span> <span className='mr-3'>orders</span> <span>number</span></h2>
  <h2 className='text-2xl font-bold mb-3 flex'><span className='mr-3'><FaWallet/> </span> <span className='mr-3'>payments</span> <span>number</span></h2>
  <h2 className='text-2xl font-bold mb-3 flex'><span className='mr-3'><FaBook/> </span> <span className='mr-3'>bookings</span> <span>number</span></h2>
  <h2 className='text-2xl font-bold mb-3 flex'><span className='mr-3'><FcCollaboration/> </span> <span className='mr-3'>reviews</span> <span>number</span></h2>
  
</div>
</div>
        </div>
    );
};

export default UserWelcome;
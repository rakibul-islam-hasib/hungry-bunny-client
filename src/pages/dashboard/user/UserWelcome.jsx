import React from 'react';

const UserWelcome = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-4xl text-orange-500 font-bold'>Welcome back Hungry Bunny</h1>
<div className='flex justify-between mr-9 mb-7 mt-10 space-x-10'>
<div className='text-center bg-gradient-to-r from-cyan-500 to-blue-500 pt-8 pb-8 pr-20 pl-20 rounded-2xl text-white'>
  <p className='text-6xl'>number</p>
  <p className='text-4xl font-bold'><span>icon</span> <span>MENU</span></p>
</div>
<div className='text-center bg-gradient-to-r from-pink-500 to-purple-500 pt-8 pb-8 pr-20 pl-20 rounded-2xl text-white'>
  <p className='text-6xl'>number</p>
  <p className='text-4xl font-bold'><span>icon</span> <span>DELIVERY</span></p>
</div>
<div className='text-center bg-gradient-to-r from-red-400 to-pink-500 pt-8 pb-8 pr-20 pl-20 rounded-2xl text-white'>
  <p className='text-6xl'>number</p>
  <p className='text-4xl font-bold'><span>icon</span> <span>CONTACT</span></p>
</div>
</div>

{/* add image and history */}
<div className='uppercase md:flex'>
<div className='w-[50%] pr-48 pl-48 pt-32 pb-36 bg-orange-100 rounded-lg mr-7'>
  <img src="https://images.generated.photos/tqxuE1n5ftUrNlNfdBHGisGdg3s65fV_qbj34-AXEag/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDUyOTkxLmpwZw.jpg"
   className='rounded-full' alt="" />
  <h3 className='text-4xl font-bold mt-7'>user name</h3>
</div>
<div className='w-[50%] pr-32 pl-32 pt-32 pb-32 bg-orange-200 rounded-lg mr-7'>
  <h2 className='text-4xl font-bold'>see your activities</h2>
</div>
</div>
        </div>
    );
};

export default UserWelcome;
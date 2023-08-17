import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const CSideBar = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <aside className=''>

            {/* Profile card section */}
            <div className="border py-6 flex flex-col justify-center items-center">
                <div className="h-[150px] mx-auto w-[150px]">
                    <img className='h-[150px] mx-auto w-[150px] outline-lime-500 outline rounded-full' src="https://i.ibb.co/51wz2Fn/pexels-the-lazy-artist-gallery-2527939.jpg" alt="" />
                </div>
                <h1 className='text-2xl font-bold mt-3 text-gray-600'>Hasib Hossain</h1>
                <p className='text-base'>Web Developer</p>
                <div className="">
                    <button className='bg-lime-500 text-white px-4 py-2 rounded-full mt-3'>Manage Profile</button>
                </div>
            </div>


        </aside>
    );
};

export default CSideBar;
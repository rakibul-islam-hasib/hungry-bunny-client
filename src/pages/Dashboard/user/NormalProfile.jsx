import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPlus, FaCommentAlt, FaPhoneAlt, FaLink, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone, AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import useUserSecure from '../../../hooks/useUserSecure';
import { useAuth } from '../../../hooks/useAuth';
import background from '../../../assets/img/district/dashProfile2.jpg';
import { Link } from 'react-router-dom';
// import '../css/NormalProfile.css';

const NormalProfile = () => {
    const { user: firebaseUser } = useAuth();
    const [user,refetch] = useUserSecure(firebaseUser?.email);
    console.log(user)



    return (
        <>
            {/* New Profile */}
            <div className='mb-10'>
                <div className='mt-20'>
                    <h1 className='text-2xl font-bold mb-5'>My Profile</h1>
                </div>

                {/* new start*/}
                <div
                    className="relative overflow-hidden rounded-lg  bg-no-repeat p-12 text-center bg-cover h-full shadow-md"
                    style={{
                        backgroundImage: `url(${background})`,
                        height: '400px',


                    }}>

                    <div
                        className="absolute inset-0 z-10 bg-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  "
                        style={{
                            // backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',


                        }}>
                        <div className='relative z-0'>
                            <h1 className='text-center text- font-bold text-3xl p-5'>Personal Information</h1>
                            <div className="flex justify-between w-full rounded-xl  bg-clip-border text-gray-700 ">
                                <div className=" w-50 shrink-0 overflow-hidden rounded-2xl text-start bg-clip-border text-gray-700 flex justify-between">
                                    <img className='h-[180px] w-[180px] rounded-full  text-start  p-2' src={user?.photo} alt="" />

                                    <div className="p-6 max-w-[25rem]">
                                        <h6 className="mb-4 border-b-2 border-black block font-sans text-3xl font-bold uppercase leading-relaxed tracking-normal text-black antialiased">
                                            {user?.name}
                                        </h6>
                                        <h6 className="mb-4 border-b-2 border-black block font-sans text-lg font-bold leading-relaxed tracking-normal text-neutral-500 antialiased">
                                            UX/UI designer
                                        </h6>
                                        <div className='flex justify-between max-w-3xl '>
                                            <div className="flex items-center ">
                                                <FaMapMarkedAlt className='text-2xl text-neutral-500 mr-2 mb-3 font-bold' />
                                                <h6 className="mb-4 font-sans text-md font-bold leading-relaxed tracking-normal text-black antialiased">
                                                    Address
                                                </h6>
                                            </div>
                                            <div className="flex items-center">
                                                <FaMapMarkerAlt className='text-2xl text-neutral-500 mr-2 mb-3' />
                                                <h6 className="mb-4 font-sans text-md font-bold leading-relaxed tracking-normal text-black antialiased">
                                                    Location
                                                </h6>
                                            </div>

                                        </div>
                                        <div className='flex justify-around max-w-3xl mt-10'>

                                            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded p-2 ms-2 flex items-center'><FaCommentAlt className='text-md mr-2' /> Message</button>


                                            <button className='bg-orange-500 hover:bg-orange-700 text-white  font-bold py-2 px-4 rounded p-2 ms-2 flex items-center text-center'><FaPlus className='text-md mr-2' /> Follow</button>


                                        </div>

                                    </div>

                                </div>
                                <div className='p-5'>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* new end*/}


                <div className='my-10'>
                    <h1><span className='text-2xl font-bold text-primary'>Bio :</span>

                    </h1>
                    <div className='mt-3'>
                        <h1 className='text-lg font-semibold'>
                            I am a UX/UI designer who believes in the power of design to enhance user interactions.Im dedicated to creating visually stunning and intuitive interfaces.
                        </h1>
                    </div>
                </div>


                <div className='flex justify-between'>
                    <div className='space-y-2'>
                        <h1 className='mb-5 text-2xl font-bold text-primary'>Address Information</h1>
                        <div className='flex gap-2'>
                            <h1>{user?.location?.union},</h1>
                            <h1>{user?.location?.upazila}</h1>
                        </div>
                        <div className='flex gap-2'>
                            <h1>{user?.location?.city}</h1>
                            <h1>{user?.location?.division}</h1>
                            <h1>{user?.location?.country}</h1>
                        </div>

                    </div>
                    <div>
                        <h1 className='mb-5 text-2xl font-bold text-primary'>Contact Information</h1>
                        <div className=' '>
                            <h1 className='flex gap-2 items-center'><AiOutlineMail className='text-xl ' /><span >{user?.email}</span></h1>
                            <h1 className='flex gap-2 items-center'><AiOutlinePhone className='text-xl ' /><span >{user?.email}</span></h1>
                            <h1 className='flex gap-2 items-center'><FaMapMarkerAlt className='text-xl ' /><span >{user?.email}</span></h1>
                        </div>

                    </div>
                </div>
                <div className='w-2/3 h-64  mx-auto'>
                    <h1 className='mb-5 text-2xl font-bold text-primary'>Billing Information</h1>
                    <div className="w-full space-y-6  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md  mb-10 me-7">

                        <div className="p-4">
                            <h6 className="mb-1 block font-sans text-lg font-bold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                **** **** **** 4696
                            </h6>
                            <h4 className="mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                12/25
                            </h4>
                            <div className='flex lg:flex md:flex justify-between sm:flex'>
                                <span>
                                    <p className="mb-2 pb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                        {user?.name}
                                    </p>
                                </span>
                                <span>
                                    <h1 className="mb-2 pb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">VISA</h1>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>








            </div>

        </>
    );
};

export default NormalProfile;
import React from 'react';
import logo from '../../../assets/img/dark-logo.png'
import FacebookSvg from '../../../assets/svg/FacebookSvg';
import WhatsappSvg from '../../../assets/svg/WhatsappSvg';
import InstagramSvg from '../../../assets/svg/InstagramSvg';
import downloadApp from '../../../assets/svg/DownloadApp.svg';
import { GrLocation } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const MainFooter = () => {
    return (
        <div className='bg-orange-100 py-11'>
            <div className="w-[90%] mx-auto">
                <div className="w-full border-b border-gray-400 pb-9 h-full gap-6 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5">
                    <div className="space-y-3">
                        <img src={logo} alt="" />
                        <p className='text-[14px] ml-3'>Hungry Bunny, This is a simple  about of  hungry bunny it is a online food delivery website .</p>
                        {/* Social Links  */}
                        <div className="flex items-center ml-2">
                            <div className="">
                                <FacebookSvg className='h-10 ' />
                            </div>
                            <div className="">
                                <WhatsappSvg className='h-10 ' />
                            </div>
                            <div className="">
                                <InstagramSvg className='h-10 ' />
                            </div>
                            <div className="">
                                <WhatsappSvg className='h-10 ' />
                            </div>
                        </div>


                    </div>

                    <div className="">
                        <h1 className='text-xl font-bold mb-4'>Products</h1>
                        <ul className=''>
                            <li className='cursor-pointer text-[14.5px] font-semibold hover:text-primary duration-300'>Price Drop</li>
                            <li className='cursor-pointer text-[14.5px] font-semibold hover:text-primary duration-300'>New Products</li>
                            <li className='cursor-pointer text-[14.5px] font-semibold hover:text-primary duration-300'>Best Sellers</li>
                            <li className='cursor-pointer text-[14.5px] font-semibold hover:text-primary duration-300'>Brands</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className='text-xl font-bold mb-4'>Our Company</h1>
                        <ul className='text-gray-600'>
                            <li className='cursor-pointer text-[14.5px] font-semibold hover:text-primary duration-300'>About Us</li>
                            <li className='cursor-pointer text-[14.5px] font-semibold hover:text-primary duration-300'>Contact Us</li>
                            <li className='cursor-pointer text-[14.5px] font-semibold hover:text-primary duration-300'>Terms & Conditions</li>
                            <li className='cursor-pointer text-[14.5px] font-semibold hover:text-primary duration-300'>Privacy Policy</li>
                            <li className='cursor-pointer text-[14.5px] font-semibold hover:text-primary duration-300'>Legal</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className='text-xl font-bold mb-4'>Download App</h1>
                        <ul>
                            <li className='text-gray-600'>
                                Save $3 with app & new user only
                            </li>
                            <li>
                                <img className='w-[120px] mt-2' src={downloadApp} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className='text-xl font-bold mb-4'>Our Information</h1>
                        <ul className='text-gray-600 space-y-2'>
                            <li className=''>
                                <GrLocation className='inline-block mr-1 text-xl text-gray-600' /> 1234 Street Name, City Name, United States
                            </li>
                            <li className=''>
                                <FiPhoneCall className='inline-block mr-1 text-xl text-gray-600' /> +1 800 123 1234
                            </li>
                            <li className=''>
                                <HiOutlineMail className='inline-block mr-1 text-xl text-gray-600' /> 
                                admin@hungry-bunny.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainFooter;
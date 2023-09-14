import React from 'react';
import logo from '../../../assets/img/dark-logo.png'
import FacebookSvg from '../../../assets/svg/FacebookSvg';
import WhatsappSvg from '../../../assets/svg/WhatsappSvg';
import InstagramSvg from '../../../assets/svg/InstagramSvg';
import downloadApp from '../../../assets/svg/DownloadApp.svg';
import { GrLocation } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import visa from '../../../assets/svg/visa.svg';
import masterCard from '../../../assets/svg/mastercard.svg';
import paypal from '../../../assets/svg/paypal.svg';
import amex from '../../../assets/svg/amex.svg';
import { Link } from 'react-router-dom';
import deliveroo from '../../../assets/img/Logos/Deliveroo-Logo.wine.png';
import eat from '../../../assets/img/Logos/Just_Eat-Logo.wine.png';
import panda from '../../../assets/img/Logos/Foodpanda-Logo.wine.png';



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
                            <li className='cursor-pointer text-[14.5px] font-semibold hover:text-primary duration-300'>Privacy Policy</li>
                            <li className='cursor-pointer text-[14.5px] font-semibold hover:text-primary duration-300'><Link to={'/faq'}>Faq</Link></li>
                            <li className='cursor-pointer text-[14.5px] font-semibold hover:text-primary duration-300'><Link to={'/blogs'}>Blog</Link></li>
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

                {/* Part 2 */}


                <div className="md:flex items-center justify-between mt-5 border-b border-b-gray-400 pb-5">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className='px-2 py-1 rounded-xl bg-white w-fit'>Information : </div>
                            <p>Biriyani under 200 taka . All bangladesh free delivery</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className='px-2 py-1 rounded-xl bg-white w-fit'>Category :</div>
                            <p>Visit our category to explore food that you want</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className='px-2 py-1 rounded-xl bg-white w-fit'>Products :</div>
                            <p>We delivered supper first</p>
                        </div>

                    </div>
                    {/* Trusted by */}
                    <div className="">
                        <h1 className='text-xl font-bold mb-4'>Trusted by</h1>
                        <div className="sm:flex items-center gap-5">
                            <img className='w-[120px]' src={deliveroo} alt="" />
                            <img className='w-[120px]' src={panda} alt="" />
                            <img className='w-[120px]' src={eat} alt="" />
                            
                        </div>
                    </div>
                </div>

                {/* part 3 */}
                <div className="mt-6 sm:flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <img src={paypal} alt="" />
                        <img src={masterCard} alt="" />
                        <img src={visa} alt="" />
                        <img src={amex} alt="" />
                    </div>
                    <div className="">
                        <p className='text-gray-600 text-center mt-2'>© 2023 Hungry Bunny. All Rights Reserved by <span className='font-bold'>The Web Warriors</span>.</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default MainFooter;
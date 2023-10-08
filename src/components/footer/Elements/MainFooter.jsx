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
// import logo2 from '../../../assets/img/Logos/'


const MainFooter = () => {
    return (
        <div className='bg-orange-100 dark:bg-black py-11'>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    className='h-10'
                                    viewBox="0 0 48 48"
                                >
                                    <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                                    <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path>
                                    <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path>
                                    <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                                </svg>
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
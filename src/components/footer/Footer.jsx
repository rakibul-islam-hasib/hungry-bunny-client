import React from 'react';
import bgImg from '../../assets/img/footer_bg.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <>
            <footer style={{backgroundImage : `url(${bgImg})`}} className='mt-5 bg-cover bg-fixed '>
                <div className="w-full h-full bg-gray-900 pr-10 md:p-10 bg-opacity-70">
                    <div className='grid md:grid-cols-3 lg:grid-cols-4 pl-8 max-w-screen-xl mx-auto text-gray-300'>
                        <div className='mt-7'>
                            <h2 className='font-bold text-2xl'>About Hungry Bunny</h2>
                            <div className='mt-14'>
                                <p className='text'>We provide best and super first online delivery services.</p>
                                <p className='text-sm'>Elizabeth Tower</p>
                                <p className='text-sm'>+088 01673-000000
                                    <br />
                                    +088 01673-000000
                                </p>
                                <p>hunny_bunny@gmail.com</p>
                            </div>
                        </div>
                        <div className='md:pl-8'>
                            <h2 className='font-bold text-2xl mt-9'>Our Gallery</h2>
                            <div className='grid grid-cols-2 gap-3 md:w-[80%] mt-14'>
                                <div>
                                    <img className='h-16 w-full max-w-[200px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJ4kQ8tPFsS5f7sWJFOngWPAsOizwWmAphg&usqp=CAU" alt="" />
                                </div>
                                <div>
                                    <img className='h-16 w-full max-w-[200px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJ4kQ8tPFsS5f7sWJFOngWPAsOizwWmAphg&usqp=CAU" alt="" />
                                </div>
                                <div>
                                    <img className='h-16 w-full max-w-[200px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJ4kQ8tPFsS5f7sWJFOngWPAsOizwWmAphg&usqp=CAU" alt="" />
                                </div>
                                <div >
                                    <img className='h-16 w-full max-w-[200px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJ4kQ8tPFsS5f7sWJFOngWPAsOizwWmAphg&usqp=CAU" alt="" />
                                </div>
                                <div>
                                    <img className='h-16 w-full max-w-[200px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJ4kQ8tPFsS5f7sWJFOngWPAsOizwWmAphg&usqp=CAU" alt="" />
                                </div>
                                <div>
                                    <img className='h-16 w-full max-w-[200px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJ4kQ8tPFsS5f7sWJFOngWPAsOizwWmAphg&usqp=CAU" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-9'>
                            <h2 className='font-bold text-2xl'>Opening Time</h2>
                            <div className='mt-14'>
                                <p>Saturday ..... 10am-11pm</p>
                                <p>Sunday .....  10am-11pm</p>
                                <p>Monday .....  10am-11pm</p>
                                <p className='font-bold'>Links</p>
                                <p><Link to='/faq'>Faq</Link></p>
                                <p><Link to='/blog'>Blog</Link></p>
                            </div>
                        </div>
                        <div className='md:hidden lg:block mt-9'>
                            <h2 className='font-bold text-2xl'>Latest Post</h2>
                            <div>
                                <div className='flex mb-2 mt-14'>
                                    <img className='h-16 w-24 mr-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIF6fjmabTGBTI7DRLfICUTEnWCdnY1ybWA&usqp=CAU" alt="" />
                                    <div>
                                        <h2 className='font-bold text-xl'>Chicken Pizza</h2>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                                <div className='flex mb-2'>
                                    <img className='h-16 w-24 mr-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIF6fjmabTGBTI7DRLfICUTEnWCdnY1ybWA&usqp=CAU" alt="" />
                                    <div>
                                        <h2 className='font-bold text-xl'>Chicken Pizza</h2>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <img className='h-16 w-24 mr-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIF6fjmabTGBTI7DRLfICUTEnWCdnY1ybWA&usqp=CAU" alt="" />
                                    <div>
                                        <h2 className='font-bold text-xl'>Chicken Pizza</h2>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

            <div className='bg-orange-400 p-3 text-white pl-14'>
                <p>@All Right Reserved by Hunny Bunny</p>
            </div>

        </>
    );
};

export default Footer;
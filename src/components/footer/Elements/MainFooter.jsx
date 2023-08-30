import React from 'react';
import logo from '../../../assets/img/dark-logo.png'
import FacebookSvg from '../../../assets/svg/FacebookSvg';
import WhatsappSvg from '../../../assets/svg/WhatsappSvg';
import InstagramSvg from '../../../assets/svg/InstagramSvg';
const MainFooter = () => {
    return (
        <div className='bg-orange-100 py-11'>
            <div className="w-[90%] mx-auto">
                <div className="w-full h-full gap-6 grid grid-cols-5">
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
                        <h1 className='text-xl font-bold'>Products</h1>
                        <ul>
                            
                        </ul>
                    </div>
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainFooter;
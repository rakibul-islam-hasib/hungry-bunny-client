import React from 'react';
import logo from '../../../assets/img/dark-logo.png'
const MainFooter = () => {
    return (
        <div className='bg-orange-100 pt-11'>
            <div className="w-[90%] mx-auto">
                <div className="w-full h-full grid grid-cols-5">
                    <div className="">
                        <img src={logo} alt="" />
                        <p className='text-[14px] ml-3'>Hungry Bunny, This is a simple  about of  hungry bunny it is a online food delivery website .</p>
                        {/* Social Links  */}
                        <div className="">
                            <div className="">
                                
                            </div>
                        </div>


                    </div>
                    <div className="">

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
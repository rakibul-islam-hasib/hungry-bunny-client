import React from 'react';
import illustration from '../../../assets/img/work/illustration-1.png';
import illustration2 from '../../../assets/img/work/illustration-2.png';
import illustration3 from '../../../assets/img/work/illustration-3.png';

const HowWeWork = () => {
    return (
        <div className=''>
            <h1 className='text-center text-5xl  font-bold'>How We <span className='text-primary'>Work</span></h1>

            <div className="flex justify-center items-center">

                <div className="flex w-[300px] flex-col justify-center items-center text-center">
                    <img src={illustration} alt="" />
                    <div className="flex items-end mt-3">
                        <span className='text-5xl text-gray-400 font-bold'>01</span>
                        <h2 className='text-2xl font-bold'>Select Restaurant</h2>
                    </div>
                    <div className="w-[80%] mx-auto mt-2">
                    <p>First Select yor favorite restaurant . Make sure you are sign in with your account in our website . Then our intellisense is suggest you your nearby restaurants</p>
                    </div>
                </div>
                <div className="flex w-[300px] flex-col justify-center items-center text-center">
                    <img src={illustration2} alt="" />
                    <div className="flex mt-3 items-end">
                        <span className='text-5xl text-gray-400 font-bold'>02</span>
                        <h2 className='text-2xl font-bold'>Select Menu</h2>
                    </div>
                    <div className="w-[80%] mt-2 mx-auto text-center">
                        <p>After successfully choosing your favorite restaurant . Then you need to select your favorite food . Then select your favorite payment method for payment . Now follow the next step</p>
                    </div>
                </div>
       
       
                <div className="flex w-[300px] flex-col justify-center items-center text-center">
                    <img src={illustration3} alt="" />
                    <div className="flex gap-1 mt-3 items-end">
                        <span className='text-5xl text-gray-400 font-bold'>03</span>
                        <h2 className='text-2xl font-bold'>Wait for delivery</h2>
                    </div>
                    <div className="w-[80%] mt-2 mx-auto text-center">
                        <p>After successfully choosing your favorite restaurant . Then you need to select your favorite food . Then select your favorite payment method for payment . Now follow the next step</p>
                    </div>
                </div>
       
            </div>


        </div>
    );
};

export default HowWeWork;
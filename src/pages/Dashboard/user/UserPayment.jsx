import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const UserPayment = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handlePayment = event => {
        event.preventDefault();
        const form = event.target;
        const cardNum = form.cardNum.value;
        const cvc = form.cvc.value;
        const expire = form.expire.value;
        const cardholder = form.cardholder.value;
        

        const newPayment = { cvc, expire, cardNum, cardholder }

        console.log(newPayment);



    }
    return (
        <>
        <Helmet>
        <title>Hungry Bunny || user payment</title>
      </Helmet>
            <div className='mt-20'>
                <h1 className='text-2xl font-bold'>Payment method</h1>
            </div>
            <div>
                <form className='form md:w-full sm:w-full  p-10 rounded-lg' onSubmit={handlePayment}>

                    <h2 className="text-3xl font-extrabold text-start mb-5">Connected payment methods</h2>

                    <div className='lg:flex md:flex justify-around sm:flex mb-16'>
                        <div className="w-full max-w-[25rem] max-h-[8rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md  mb-10 me-7">
                            
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
                                    Jane Robert
                                </p>
                                    </span>
                                    <span>
                                    <h1 className="mb-2 pb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">VISA</h1>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-[25rem] max-h-[8rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            
                            <div className="p-4">
                                <h6 className="mb-1 block font-sans text-lg font-bold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                **** **** **** 3295
                                </h6>
                                <h4 className="mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                10/23
                                </h4>
                                <div className='flex lg:flex md:flex justify-between sm:flex'>
                                    <span>
                                    <p className="mb-2 pb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                    Henry Devid
                                </p>
                                    </span>
                                    <span>
                                    <h1 className="mb-2 pb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">VISA</h1>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <h2 className="text-3xl font-extrabold text-start mb-2">New Payment method</h2>

                    {/* form card number, expiration and CVC name row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Card Number</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="cardNum" placeholder="XXXX - XXXX - XXXX - XXXX" className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Expiration</span>
                            </label>
                            <label className="input-group">
                                <input type="expire" name="expire" id="" placeholder='MM / YYYY' className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">CVC</span>
                            </label>
                            <label className="input-group">
                                <input type="cvc" name="cvc" id="" placeholder='XXX' className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                    </div>
                    {/* form Cardholder row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:full lg:w-full">
                            <label className="label">
                                <span className="label-text">Cardholder</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="cardholder" placeholder="Enter Name on Card" className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        
                    </div>


                    
                        

                        <div className='text-end'>
                            
                            <input type="submit" value="Add New Payment Method" className=" bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded p-2 ms-2 " />

                        </div>
                    


                </form>
            </div>

        </>
    );
};

export default UserPayment;
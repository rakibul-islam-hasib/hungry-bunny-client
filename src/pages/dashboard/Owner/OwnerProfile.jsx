import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { MdDriveFileRenameOutline } from 'react-icons/md';

const OwnerProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleAccount = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const last = form.last.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const newAccount = { name, last, email, phone }

        console.log(newAccount);

        // // send data to the server
        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newAccount)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Successfull',
        //                 showClass: {
        //                   popup: 'animate__animated animate__fadeInDown'
        //                 },
        //                 hideClass: {
        //                   popup: 'animate__animated animate__fadeOutUp'
        //                 }
        //               })
        //         }
        //     })


    }

    return (
        <>
            <div className='mt-20'>
                <h1 className='text-2xl font-bold'>Account</h1>
            </div>
            <div>
                <form className='form md:w-full sm:w-full bg-purple-200 p-10 rounded-lg' onSubmit={handleAccount}>
                    <h2 className="text-3xl font-extrabold text-start mb-2">Personal Information</h2>

                    <div>
                        <div className="mb-5">
                            <h1 className='text-2xl'>Avatar </h1>
                            <div className='lg:flex md:flex'>
                                <span className='me-4'>
                                    <img className='h-[100px] w-[100px] rounded-lg mb-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTko38x76BKbf_gARfDc4DuyP_Q30OnRBpT_w&usqp=CAU" alt="" />
                                </span>
                                <span className='mt-8'>
                                    <button
                                        onClick={openModal}
                                        className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                    >
                                        Change
                                    </button>
                                    <button
                                        onClick={openModal}
                                        className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ms-2"
                                    >
                                        Remove
                                    </button>
                                </span>
                            </div>

                        </div>
                    </div>
                    {/* form first name and last name row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="First Name" className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <label className="input-group">
                                <input type="last" name="last" id="" placeholder='Last Name' className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                    </div>
                    {/* form Email and phone row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" placeholder="Email" className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                    </div>

                    <div className='my-10'>
                        <h1 className='font-bold text-xl'>Email notifications</h1>
                        <div className='grid grid-cols-2'>
                            <label>
                                <input className='my-5' type="checkbox" checked /> New Deals
                            </label>
                            <label>
                                <input className='my-5' type="checkbox" checked /> Password changes
                            </label>
                            <label>
                                <input className='my-5' type="checkbox" checked /> New Restaurants
                            </label>
                            <label>
                                <input className='my-5' type="checkbox" checked /> Special Offers
                            </label>
                            <label>
                                <input className='my-5' type="checkbox" checked /> Order Statuses
                            </label>
                            <label>
                                <input className='my-5' type="checkbox" checked /> Newsletter
                            </label>
                        </div>

                    </div>

                    <div className='lg:flex md:flex justify-between sm:flex'>
                        <div className='mb-5'>
                            <input type="submit" value="Log out" className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded" />
                        </div>

                        <div className='gap-2'>
                            <input type="submit" value="Discard changes" className="bg-slate-200 hover:bg-slate-300 font-bold py-2 px-4 rounded text-black" />
                            <input type="submit" value="Save changes" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-2 ms-2" />

                        </div>
                    </div>


                </form>
            </div>

        </>
    );
};

export default OwnerProfile;
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
        
        const newAccount = {name, last, email, phone}

        console.log(newAccount);

        // // send data to the server
        // fetch('https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newToy)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Successfully Added',
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
            <h2 className="text-3xl font-extrabold text-center mt-2 mb-2">Personal Information</h2> 
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
               
               <div className='lg:flex md:flex justify-between'>
               <div>
                <input type="submit" value="Log out" className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded" />
                </div>

                <div className='gap-2'>
                <input type="submit" value="Discard changes" className="btn btn-primary bg-white rounded p-2 text-black btn-block" />
                <input type="submit" value="Save changes" className="btn btn-primary bg-blue-500 rounded p-2 ms-2 text-white btn-block" />
                
                </div>
               </div>
                

            </form>
            </div>
            
        </>
    );
};

export default OwnerProfile;
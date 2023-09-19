import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const UserSecurity = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSecurity = event => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const password = form.password.value;
        const newPass = form.newPass.value;
        const confirm = form.confirm.value;
        

        const changePass = { phone, password, newPass, confirm }

        console.log(changePass);

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
        <Helmet>
        <title>Hungry Bunny || secure your Information</title>
      </Helmet>
            <div className='mt-20'>
                <h1 className='text-2xl font-bold'>Security</h1>
            </div>
            <div>
                <form className='form md:w-full sm:w-full  p-10 rounded-lg' onSubmit={handleSecurity}>
                    <h2 className="text-3xl font-extrabold text-start mb-2">2 factor Authentication</h2>
                       {/* form Phone number row */}
                    <div className="lg:flex md:flex justify-between sm:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="phone" placeholder="Enter Your Phone Number" className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        <div className='text-end'>
                            
                            <input type="submit" value="Turn On" className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded mt-6" />

                        </div>
                    </div>

                    <h2 className="text-3xl font-extrabold text-start mb-2 mt-32">Change Password</h2>

                    {/* form change password name row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Current Password</span>
                            </label>
                            <label className="input-group">
                                <input type="password" name="password" placeholder="Enter Current Password" className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">New Password</span>
                            </label>
                            <label className="input-group">
                                <input type="Password" name="newPass" id="" placeholder='Enter New Password' className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Confirm New Password</span>
                            </label>
                            <label className="input-group">
                                <input type="password" name="confirm" id="" placeholder='Confirm New Password' className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                    </div>
                    


                    
                        

                        <div className='text-end'>
                            
                            <input type="submit" value="Change Password" className=" bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded p-2 ms-2" />

                        </div>
                    


                </form>
            </div>

        </>
    );
};

export default UserSecurity;
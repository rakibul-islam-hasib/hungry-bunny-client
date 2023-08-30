import React, { useEffect, useState } from 'react';
import ChangeProfilePicModal from '../../../components/Modals/ChangeProfilePicModal';
import { useAuth } from '../../../hooks/useAuth';
import useUserSecure from '../../../hooks/useUserSecure';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();
    const axios = useAxiosSecure();
    // console.log(data, 'data from user profile')
    const fetchUser = async () => {
        const res = await axios.get(`/user-info/${user?.email}`);
        console.log(res.data, 'data from user profile')
        return res.data;
    }
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleProfilePicChange = (file) => {
        console.log(file);
    };


    return (
        <>
            <div className='mt-20'>
                <h1 className='text-2xl font-bold'>Account</h1>
            </div>
            <div>
                <div className='form md:w-full sm:w-full p-10 rounded-lg'>
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
                                        className="bg-transparent hover:bg-primary  text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded"
                                    >
                                        Change
                                    </button>
                                    <button
                                        onClick={openModal}
                                        className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded ms-2"
                                    >
                                        Remove
                                    </button>
                                </span>
                            </div>

                        </div>
                    </div>


                    {/* form first name and last name row */}
                    <form className="md:flex mb-6">
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
                    </form>
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
                                <input className='my-5' type="checkbox" defaultChecked /> New Deals
                            </label>
                            <label>
                                <input className='my-5' type="checkbox" defaultChecked /> Password changes
                            </label>
                            <label>
                                <input className='my-5' type="checkbox" defaultChecked /> New Restaurants
                            </label>
                            <label>
                                <input className='my-5' type="checkbox" defaultChecked /> Special Offers
                            </label>
                            <label>
                                <input className='my-5' type="checkbox" /> Order Statuses
                            </label>
                            <label>
                                <input className='my-5' type="checkbox" /> Newsletter
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


                </div>
            </div>
            <ChangeProfilePicModal isOpen={isOpen} onClose={closeModal} onSuccess={handleProfilePicChange} />
        </>
    );
};

export default UserProfile;
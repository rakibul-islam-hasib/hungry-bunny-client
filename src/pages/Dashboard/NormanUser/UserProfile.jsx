import React, { useEffect, useState } from 'react';
import ChangeProfilePicModal from '../../../components/Modals/ChangeProfilePicModal';
import { useAuth } from '../../../hooks/useAuth';
import useUserSecure from '../../../hooks/useUserSecure';
import Loader from '../../../components/loader/Loader';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';


const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user: firebaseUser } = useAuth();
    const [user, isLoading, refetch] = useUserSecure(firebaseUser?.email);
    const axios = useAxiosSecure();
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleProfilePicChange = (imgURL) => {
        console.log(imgURL);
        axios.put(`/user-info/photo/${firebaseUser?.email}`, { photo: imgURL })
            .then((res) => {
                console.log(res);
                if (res.data.modifiedCount) {
                    toast.success('Profile pic changed successfully');
                    refetch();
                }
            })
            .catch((err) => {
                console.log(err);
            })

    };

    if (isLoading) return <Loader />

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
                                    <img className='h-[100px] w-[100px] rounded-lg mb-5' src={user.photo} alt="" />
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
                        <div className=" md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-primary">First Name</span>
                            </label>
                            <label className="">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="First Name"
                                    className=" outline-none border border-primary w-full rounded p-2" />
                            </label>
                        </div>
                        <div className=" md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-primary">Last Name</span>
                            </label>
                            <label className="">
                                <input
                                    type="text"
                                    name="last"
                                    placeholder='Last Name'
                                    className=" outline-none border border-primary w-full rounded p-2"
                                />
                            </label>
                        </div>
                    </form>
                    {/* form Email and phone row */}
                    <div className="md:flex mb-6">
                        <div className=" md:w-1/2">
                            <label className="label">
                                <span className="label-text text-primary">Email</span>
                            </label>
                            <label className="">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className=" outline-none border border-primary w-full rounded p-2"
                                />
                            </label>
                        </div>
                        <div className=" md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-primary">Phone Number</span>
                            </label>
                            <label className="">
                                <input type="text" name="phone" placeholder="Phone Number" className=" outline-none border border-primary w-full rounded p-2" />
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
import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';


const ManageUsersTable = ({ userData, refetch }) => {
    const axios = useAxiosSecure();


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    const handleMakeAdmin = (userData) => {
        console.log(userData);


        Swal.fire({
            title: 'Hey',
            text: "You Want to Make User Admin",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make Admin'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`/user-info/admin/${userData._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            console.log(res.data);
                            Swal.fire(
                                'success!',
                                'User Is Admin Now.',
                                'success'
                            )
                        }
                    })
            }
        })


            .catch(err => console.log(err))
            // .finally(() => setIsOpen(false))
            .finally({
                // console.log(id)

            })
    }
    const handleMakeRestaurant = (userData) => {
        axios.patch(`/user-info/restaurant/${userData._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    console.log(res.data);
                    toast.success('User Is Become A Restaurant Now')
                }
            })
            .catch(err => console.log(err))
            // .finally(() => setIsOpen(false))
            .finally({
                // console.log(id)

            })
    }


    const handleRemoveUser = (userData) => {

        console.log(userData);


    }


    return (
        <div className='flex mx-auto py-3 justify-between w-full'>
            <div className='flex w-2/5 items-center'>
                <img src={userData.photo} className="w-12 h-12 rounded-full mr-4" />
                <div className=''>
                    <h4 className="font-bold  ">{userData.name}</h4>
                    <span className="text-gray-700">{userData.email}</span>
                    <br className='bg-red-500 text-red-500' />
                </div>
            </div>
            <div className='w-1/5'>
                <span className=''>{userData.role}</span>
            </div>

            {/* Action Modal Open Here */}
            <div className='w-1/5'>
                <Menu as="div" className="relative inline-block text-left">


                    <span className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                        <Menu.Button className="items-center flex relative font-bold px-4  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Action

                        </Menu.Button>
                    </span>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() => handleMakeAdmin(userData)}

                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 w-full text-sm'
                                            )}
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() => handleMakeRestaurant(userData)}

                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Make Restaurant
                                        </button>
                                    )}
                                </Menu.Item>
                                <div >
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => handleRemoveUser(userData)}

                                                // type="submit"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block w-full px-4 py-2 text-left text-sm'
                                                )}
                                            >
                                                Remove Permanent
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
};

export default ManageUsersTable;
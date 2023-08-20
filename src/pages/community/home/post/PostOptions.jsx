// import { Menu } from '@mui/material';
import { Menu } from '@headlessui/react';
import React from 'react';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';

const PostOptions = () => {
    return (
        <>
            <Menu as="div" className="relative  inline-block">
                <div>
                    <Menu.Button className="focus:outline-none">
                        <div className="cursor-pointer mt-2">
                            <PiDotsThreeOutlineFill className='text-3xl text-primary' />
                        </div>
                    </Menu.Button>
                </div>
                <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <button

                                className={`${active ? 'bg-gray-100' : ''
                                    } group flex items-center w-full px-4 py-2 text-sm`}
                            >
                                Dashboard
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={() => console.log('help')}
                                className={`${active ? 'bg-gray-100' : ''
                                    } group flex items-center w-full px-4 py-2 text-sm`}
                            >
                                Help
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button

                                className={`${active ? 'bg-gray-100' : ''
                                    } group flex items-center w-full px-4 py-2 text-sm`}
                            >
                                Logout
                            </button>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </>
    );
};

export default PostOptions;
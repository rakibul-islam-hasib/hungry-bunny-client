import { Menu } from '@headlessui/react';
import React, { useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import LogoutPopup from '../../popup/LogoutPopup';

const NavMenu = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <>
            <Menu as="div" className="relative  inline-block">
                <div>
                    <Menu.Button className="focus:outline-none">
                        <div className="cursor-pointer mt-2">
                            <RxAvatar className='text-3xl text-primary' />
                        </div>
                    </Menu.Button>
                </div>
                <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={() => navigate('/dashboard')}
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
                                onClick={() => setOpen(true)}
                                className={`${active ? 'bg-gray-100' : ''
                                    } group flex items-center w-full px-4 py-2 text-sm`}
                            >
                                Logout
                            </button>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>

            {
                // Modal here 
            }
            <LogoutPopup open={open} setOpen={setOpen} />

        </>
    );
};

export default NavMenu;
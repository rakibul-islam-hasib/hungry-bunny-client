import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MdOutlineViewTimeline, MdRssFeed } from 'react-icons/md';
import { IoNotificationsSharp } from 'react-icons/io5';
import '../css/style.css'
import { FaBars } from 'react-icons/fa';
const navLinks = [
    {
        id: 1,
        name: 'Feed',
        icon: <MdRssFeed />,
        path: '/community',
    },
    {
        id: 2,
        name: 'About',
        icon: <IoNotificationsSharp />,
        path: '/about',
    },
    {
        id: 3,
        name: 'Contact',
        icon: <MdOutlineViewTimeline />,
        path: '/contact',
    },
];


const CnavBar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const location = useLocation();
    return (
        <nav>
            <div className="w-[90%] mx-auto py-6 flex justify-between">
                <div className="logo">
                    <Link to='/'>
                        <h1 className='md:text-2xl text-xl font-bold'>Hungry <span className='text-primary'>Bunny</span> </h1>
                        <p><span className='text-lime-500 text-xl font-bold'>Community</span></p>
                    </Link>
                </div>
                <div className="">
                    <ul className={isFixed ? 'flex dark:text-gray-100 mt-2 space-x-6 nav-links' : 'flex mt-2 dark:text-black space-x-6 nav-links'}>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <NavLink

                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive ? 'active-link' : ''
                                    }
                                >
                                    <span className='inline-flex px-2 items-center gap-2'>
                                        <span className={location.pathname === link.path ? 'text-primary h-6 w-6 text-2xl' : 'h-6 w-6 text-2xl'}>{link.icon}</span>
                                        <span className='hidden md:block'>{link.name}</span>
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <div className="hidden md:block">
                        <button className="btn-c-nav">
                            <span className="icon">
                                <svg viewBox="0 0 175 80" width="40" height="40">
                                    <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                                    <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                                    <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                                </svg>
                            </span>
                            <span className="text">MENU</span>
                        </button>
                    </div>
                    <button className='bg-primary py-3 rounded-lg md:hidden block mt-1 text-white  px-4'>
                        <FaBars />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default CnavBar;
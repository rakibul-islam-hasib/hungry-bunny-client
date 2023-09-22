import React, { useEffect, useState } from 'react';
import cartImg from '../../assets/icons/cart.svg';
import CheckoutBar from '../cart/CheckoutBar';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './css/style.css';
import { gsap } from 'gsap';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../assets/img/logo.png';
import darkLogo from '../../assets/img/dark-logo.png';
import NavMenu from './NavElement/NavMenu';
import { useDispatch } from 'react-redux';
import { setCheckoutOpen } from '../../redux/slices/utilsSlice';

const navLinks = [
    {
        id: 1,
        name: 'Home',
        path: '/',
    },
    {
        id: 2,
        name: 'About',
        path: '/about',
    },
    {
        id: 3,
        name: 'Contact',
        path: '/contact',
    },

    {
        id: 4,
        name: 'Community',
        path: '/community',
    },
    {
        id: 5,
        name: 'Restaurants',
        path: '/application',
    },
    {
        id: 7,
        name: 'Menu',
        path: '/menu',
    },
    {
        id: 8,
        name: 'Team Info',
        path: '/team-info',
    },
];




const NavBar = () => {
    const [showNav, setShowNav] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('isDarkMode') === 'true'
    );
    const { user } = useAuth();
    const animate = () => {
        const timeline = gsap.timeline({
            onComplete: () => {
                console.log('done');
            },
        });
        timeline.to('.side-md', {
            duration: 1,
            left: 0,
            ease: 'power4.out',
        });
    };

    const handleCollapse = () => {
        if (showNav) {
            animate();
        } else {
            gsap.to('.side-md', {
                duration: 2,
                left: '-1000px',
                top: 0,
                ease: 'power4.out',
            });
        }
    };

    useEffect(() => {
        handleCollapse();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showNav]);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    }, [scrollPosition]);

    useEffect(() => {
        const darkClass = 'dark';
        const root = window.document.documentElement;

        if (isDarkMode) {
            root.classList.add(darkClass);
        } else {
            root.classList.remove(darkClass);
        }

        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);



    return (
        <>
            <div
                className={
                    isFixed
                        ? 'fixed dark:text-white text-black top-0 z-[99] w-full duration-[1s] dark:bg-black bg-white dark:bg-opacity-60 backdrop-blur-xl bg-opacity-60'
                        : 'static top-0 dark:text-black'
                }
            >
                <nav className=" py-3 relative">
                    <div className="w-[90%] mx-auto flex justify-between items-center ">
                        <div onClick={() => navigate('/')} className="logo">
                            <div onContextMenu={e => e.preventDefault()} className="flex items-center">
                                {isDarkMode ? <img className='' src={logo} alt="" /> : <img src={darkLogo}
                                    // className='w-[100px]'
                                    alt="" />}
                                {/* <h1 className={isFixed ? 'font-bold dark:text-gray-200 text-xl' : 'font-bold dark:text-white text-xl'}>Hungry Bunny</h1> */}
                            </div>

                        </div>
                        <div className="links hidden md:block">
                            <ul className={isFixed ? 'flex dark:text-gray-100 space-x-6 nav-links' : 'flex dark:text-white space-x-6 nav-links'}>
                                {navLinks.map((link) => (
                                    <li key={link.id}>
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                isActive ? 'active-link' : isFixed ? 'dark:text-gray-100' : 'dark:text-white'
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                                <li>
                                    {
                                        user ? (
                                            ''
                                        ) : (
                                            <NavLink to='/login' className={location.pathname === '/login' ? 'active-link' : 'dark:text-gray-100 text-black'}>Login</NavLink>
                                        )
                                    }

                                </li>
                            </ul>
                        </div>
                        <div className="search-and-others flex items-center space-x-2">
                            <div className="">
                                <button
                                    onClick={() => dispatch(setCheckoutOpen(true))}
                                    className="px-3 relative py-1 rounded-full"
                                >
                                    <img className="w-9" src={cartImg} alt="" />
                                    <div className="px-2 py-2 absolute -top-5 right-2 bg-red-700 rounded-full  blur-xl">
                                        <span className="">{/* cart count */}</span>
                                    </div>
                                </button>
                            </div>
                            <div className="md:hidden">
                                <AiOutlineBars
                                    onClick={() => setShowNav(!showNav)}
                                    className="text-3xl"
                                />
                            </div>
                            <div className="">
                                <label className="switch">
                                    <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                                    <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
                                    <input defaultChecked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} type="checkbox" className="input" />
                                    <span className="slider"></span>
                                </label>
                            </div>
                            <div className="">
                                {/* {user && <LogoutBtn />} */}
                                <div className="">
                                    {user && (
                                        <NavMenu />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden top-0 block side-md absolute z-[999]  -left-[500px] h-screen w-full bg-blue-300">
                        <div className="w-full border">
                            <div className="flex justify-end">
                                <AiOutlineClose
                                    onClick={() => setShowNav(false)}
                                    className="text-3xl"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full">
                            <ul className="space-y-5">
                                {navLinks.map((link) => (
                                    <li key={link.id}>
                                        <NavLink
                                            to={link.path}
                                            onClick={() => setShowNav(false)}
                                            className={({ isActive }) =>
                                                isActive ? 'active-link' : ''
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                                <li>
                                    {
                                        user ? (
                                            ''
                                        ) : (
                                            <NavLink to='/login' onClick={() => setShowNav(false)} className={location.pathname === '/login' ? 'active-link' : ''}>Login</NavLink>
                                        )
                                    }

                                </li>
                            </ul>


                        </div>


                    </div>
                </nav>
            </div>
            <CheckoutBar />
        </>
    );
};

export default NavBar;
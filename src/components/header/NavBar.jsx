import React, { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import cartImg from '../../assets/icons/cart.svg';
import CheckoutBar from '../cart/CheckoutBar';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import './css/style.css';
import { gsap } from 'gsap';
import clickSound from '../../assets/audio/click.mp3';

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
        name: 'Login',
        path: '/login',
    },
];

const NavBar = () => {
    const inputRef = useRef(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('isDarkMode') === 'true'
    );

    const click = new Audio(clickSound);

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


    const onPathChange = () => {
        click.play();
    }



    return (
        <>
            <div
                className={
                    isFixed
                        ? 'fixed top-0 z-[999] w-full duration-[1s] dark:bg-black bg-white dark:bg-opacity-60 backdrop-blur-xl bg-opacity-60'
                        : 'static top-0 dark:text-black'
                }
            >
                <nav className=" py-3 relative">
                    <div className="w-[90%] mx-auto flex justify-between items-center ">
                        <div className="logo">
                            <h1 className={isFixed ? 'font-bold dark:text-gray-200 text-xl' : 'font-bold dark:text-black text-xl'}>Foo</h1>
                        </div>
                        <div className="links hidden md:block">
                            <ul className={isFixed ? 'flex dark:text-gray-100 space-x-6 nav-links' : 'flex dark:text-black space-x-6 nav-links'}>
                                {navLinks.map((link) => (
                                    <li key={link.id}>
                                        <NavLink
                                            onClick={() => onPathChange()}
                                            to={link.path}
                                            className={({ isActive }) =>
                                                isActive ? 'active-link' : ''
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="search-and-others flex items-center space-x-2">
                            <div className="relative">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    onFocus={() => (inputRef.current.placeholder = 'Search here...')}
                                    onBlur={() => (inputRef.current.placeholder = '')}
                                    className="outline-none w-[40px] duration-300 focus:w-[200px] border-orange-300 border px-3 py-1 rounded-full"
                                />
                                <div
                                    onClick={() => inputRef.current.focus()}
                                    className="absolute top-[9px] right-3"
                                >
                                    <BsSearch />
                                </div>
                            </div>
                            <div className="">
                                <button
                                    onClick={() => setShowSidebar(!showSidebar)}
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
                            <div className="flex flex-col justify-center items-center">
                                <Switch onChange={() => setIsDarkMode(!isDarkMode)} checked={isDarkMode} />
                                <h1 className="text-[8px]">Light/Dark</h1>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden top-0 block side-md absolute  -left-[500px] h-screen w-full bg-blue-300">
                        <div className="w-full border">
                            <div className="flex justify-end">
                                <AiOutlineClose
                                    onClick={() => setShowNav(false)}
                                    className="text-3xl"
                                />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <CheckoutBar visibleLeft={showSidebar} setVisibleLeft={setShowSidebar} />
        </>
    );
};

export default NavBar;
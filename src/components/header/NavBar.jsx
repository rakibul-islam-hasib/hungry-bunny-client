import React, { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import cartImg from '../../assets/icons/cart.svg';
import CheckoutBar from '../cart/CheckoutBar';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import './css/style.css';
import { gsap } from 'gsap';
const navLinks = [
    {
        id: 1,
        name: 'Home',
        path: '/'
    },
    {
        id: 2,
        name: 'About',
        path: '/about'
    },
    {
        id: 3,
        name: 'Contact',
        path: '/contact'
    },
    {
        id: 4,
        name: 'Login',
        path: '/login'
    },

]
const NavBar = () => {
    const inputRef = useRef(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const animate = () => {
        const timeline = gsap.timeline({
            onComplete: () => {
                console.log('done')
            }
        });
        timeline.to('.side-md', {
            duration: 1,
            left: 0,
            ease: 'power4.out',
        })
    }


    const handleCollapse = () => {
        if (showNav) {
            animate();
        } else {
            gsap.to('.side-md', {
                duration: 2,
                left: '-1000px',
                top: 0,
                ease: 'power4.out'
            })
        }
    }
    useEffect(() => {
        handleCollapse();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showNav])
    return (
        <>
            <nav className=' py-3 relative'>
                <div className="w-[90%] mx-auto flex justify-between items-center ">
                    <div className="logo">
                        <h1 className='font-bold text-xl'>Foo</h1>
                    </div>
                    <div className="links hidden md:block">
                        <ul className='flex space-x-6 nav-links'>
                            {navLinks.map(link => <li key={link.id}>{link.name}</li>)}
                        </ul>
                    </div>
                    <div className="search-and-others flex items-center space-x-2">
                        <div className="relative">
                            <input
                                ref={inputRef}
                                type="text"
                                onFocus={() => inputRef.current.placeholder = 'Search here...'}
                                onBlur={() => inputRef.current.placeholder = ''}
                                className='outline-none w-[40px] duration-300 focus:w-[200px] border-orange-300 border px-3 py-1 rounded-full' />
                            <div onClick={() => inputRef.current.focus()} className="absolute top-[9px] right-3">
                                <BsSearch />
                            </div>
                        </div>
                        <div className="">
                            <button onClick={() => setShowSidebar(!showSidebar)} className='px-3 relative py-1 rounded-full'>
                                <img className='w-9' src={cartImg} alt="" />
                                <div className='px-2 py-2 absolute -top-5 right-2 bg-red-700 rounded-full  blur-xl'><span className=''>0</span></div>
                            </button>
                        </div>
                        <div className="md:hidden">
                            <AiOutlineBars onClick={() => setShowNav(!showNav)} className='text-3xl' />
                        </div>
                    </div>
                </div>
                <div className="md:hidden top-0 block side-md absolute  -left-[500px] h-screen w-full bg-blue-300">
                    <div className="w-full border">
                        <div className="flex justify-end">
                            <AiOutlineClose onClick={() => setShowNav(false)} className='text-3xl' />
                        </div>
                    </div>
                </div>
            </nav>
            <CheckoutBar visibleLeft={showSidebar} setVisibleLeft={setShowSidebar} />
        </>
    );
};

export default NavBar;
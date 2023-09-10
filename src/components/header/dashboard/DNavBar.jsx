import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { gsap } from 'gsap';
const DNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openNav = () => {
        const timeline = gsap.timeline();
        timeline.to('#dashboard-nav', {
            duration: 0.5,
            top: 0,
            ease: 'power4.out'
        })
    }
    const closeNav = () => {
        const timeline = gsap.timeline();
        timeline.to('#dashboard-nav', {
            duration: 0.5,
            top: '-1000px',
            ease: 'power4.out'
        })
    }

    useEffect(() => {
        if (isOpen) {
            openNav();
        } else {
            closeNav();
        }
    }, [isOpen])

    return (
        <div className='md:hidden fixed z-[9] top-0 bg-white px-8 py-3 w-full backdrop-blur-2xl' >
            <div className="flex items-center justify-between">
                <h1>Dashboard</h1>
                <FaBars onClick={() => setIsOpen(!isOpen)} />
            </div>


            <div id='dashboard-nav' className="fixed z-10  left-0 -top-[1000px] h-screen bg-lime-300 w-full">
                <div className="px-8 py-3">
                    <div className="flex items-center justify-between">
                        <h1>Dashboard</h1>
                        <AiOutlineClose onClick={() => setIsOpen(!isOpen)} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DNavBar;
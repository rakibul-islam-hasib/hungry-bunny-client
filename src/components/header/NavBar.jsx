import React, { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import cartImg from '../../assets/icons/cart.svg';
import CheckoutBar from '../cart/CheckoutBar';
const navLinnks = [
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
    return (
        <>
            <nav className=' py-3'>
                <div className="w-[90%] mx-auto flex justify-between items-center ">
                    <div className="logo">
                        <h1 className='font-bold text-xl'>Foo</h1>
                    </div>
                    <div className="links hidden md:block">
                        <ul className='flex space-x-6 '>
                            {navLinnks.map(link => <li key={link.id}>{link.name}</li>)}
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
                            <button onClick={()=>setShowSidebar(true)} className='px-3 relative py-1 rounded-full'>
                                <img className='w-9' src={cartImg} alt="" />
                                <div className='px-2 py-2 absolute -top-5 right-2 bg-red-700 rounded-full  blur-xl'><span className=''>0</span></div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <CheckoutBar visibleLeft={showSidebar} setVisibleLeft={setShowSidebar} />
        </>
    );
};

export default NavBar;
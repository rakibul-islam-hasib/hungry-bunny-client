import React from 'react';

const NavBar = () => {
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
    return (
        <nav className=' py-3'>
            <div className="w-[90%] mx-auto flex justify-between items-center ">
                <div className="logo">
                    <h1 className='font-bold text-xl'>Foo</h1>
                </div>
                <div className="links">
                    <ul className='flex space-x-6 '>
                        {navLinnks.map(link => <li key={link.id}>{link.name}</li>)}
                    </ul>
                </div>
                <div className="search-and-others">
                        <div className="">
                            <input type="text" className='outline-none' placeholder='Search...' />
                        </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
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
            <div className="w-[90%] mx-auto ">
                <div className="logo">
                    <h1 className='font-bold text-xl'>Foo</h1>
                </div>
                <div className="links">

                </div>
                <div className="search-and-others">

                </div>
            </div>
        </nav>
    );
};

export default NavBar;
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <main style={{background : 'linear-gradient(329deg, #F4ECE1 0%, #FCFBF7 100%)'}} className='min-h-screen'>
            <NavBar />
            <Outlet />
            <Footer/>
        </main>
    );
};

export default MainLayout;
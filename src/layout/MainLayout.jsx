import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <main>
            <NavBar />
            <Outlet />
            <Footer/>
        </main>
    );
};

export default MainLayout;
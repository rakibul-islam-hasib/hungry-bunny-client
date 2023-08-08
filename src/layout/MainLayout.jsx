import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';
import Loader from '../components/loader/Loader';

const MainLayout = () => {
    const loading = false;

    if (loading) return <Loader />

    return (
        <>
            <main style={{ background: 'linear-gradient(329deg, #F4ECE1 0%, #FCFBF7 100%)' }} className=''>
                <NavBar />
                <div className="max-w-screen-xl mx-auto">
                    <Outlet />
                </div>
                <Footer />
            </main>
            <ScrollRestoration />
        </>
    );
};

export default MainLayout;
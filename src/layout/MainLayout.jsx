import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';
import Loader from '../components/loader/Loader';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    const { loading } = useSelector(state => state.auth);
    if (loading) return <Loader />
    return (
        <>
            <main className=''>
                <NavBar />
                <div className="max-w-screen-xl mx-auto">
                    <Outlet />
                </div>
                <Footer />
            </main>
            <ScrollRestoration />
            <ToastContainer />
        </>
    );
};

export default MainLayout;
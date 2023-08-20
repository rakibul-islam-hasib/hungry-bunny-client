import React from 'react';
import { Toaster } from 'react-hot-toast';
import CnavBar from '../components/header/Community/CnavBar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import CSideBar from '../components/sidebar/CSideBar';
import { useAuth } from '../hooks/useAuth';
import Loader from '../components/loader/Loader';
const CommunityLayout = () => {
    const { loading } = useAuth();

    if (loading) return <Loader />
    return (
        <>
            <section className=' h-full'>
                <CnavBar />
                <section className='max-w-screen-xl mx-auto'>
                    <div className="grid md:grid-cols-5">
                        <div className="col-span-4">
                            <Outlet />
                        </div>
                        <div className="col-span-1 hidden md:block">
                            <CSideBar />
                        </div>
                    </div>
                </section>
            </section>
            <ScrollRestoration />
            <Toaster />
        </>
    );
};

export default CommunityLayout;
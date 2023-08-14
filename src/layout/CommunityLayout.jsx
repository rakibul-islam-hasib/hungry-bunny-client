import React from 'react';
import CnavBar from '../components/header/Community/CnavBar';
import { Outlet } from 'react-router-dom';

const CommunityLayout = () => {
    return (
        <section className='bg-gray-100 h-full'>
            <CnavBar />
            <section className='max-w-screen-xl mx-auto'>
                <Outlet />
            </section>
        </section>
    );
};

export default CommunityLayout;
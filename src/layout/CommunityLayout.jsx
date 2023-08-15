import React from 'react';
import CnavBar from '../components/header/Community/CnavBar';
import { Outlet } from 'react-router-dom';
import CSideBar from '../components/sidebar/CSideBar';

const CommunityLayout = () => {
    return (
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
    );
};

export default CommunityLayout;
import React from 'react';
import CnavBar from '../components/header/Community/CnavBar';
import { Outlet } from 'react-router-dom';

const CommunityLayout = () => {
    return (
        <section className=' h-full'>
            <CnavBar />
            <section className='max-w-screen-xl mx-auto'>
                <div className="grid grid-cols-5">
                    <div className="col-span-4">
                        <Outlet />
                    </div>
                    <div className="col-span-1">
                        <h1>This is sidebar here</h1>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default CommunityLayout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/NavBar';

const MainLayout = () => {
    return (
        <main>
            <NavBar />
            <Outlet />
        </main>
    );
};

export default MainLayout;
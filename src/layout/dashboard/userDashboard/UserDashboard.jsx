import React from 'react';
import { useAuth } from '../../../hooks/useAuth';

const UserDashboard = () => {
    const { user } = useAuth();
    return (
        <div className='h-screen flex justify-center items-center '>
            <h1 className='text-6xl font-bold'>{user.displayName} <span className='text-primary'>Welcome</span></h1>
        </div>
    );
};

export default UserDashboard;
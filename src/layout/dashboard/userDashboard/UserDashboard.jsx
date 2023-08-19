import React from 'react';
import { useAuth } from '../../../hooks/useAuth';

const UserDashboard = () => {
    const { user } = useAuth();

    return (

        <div>
            <h1>Profile</h1>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quia! Illum nam asperiores fugit corporis omnis voluptatem fuga hic incidunt aliquam, fugiat perferendis natus numquam molestiae a iusto explicabo eveniet!</h1>

            <div className='h-screen flex justify-center items-center '>
                <h1 className='text-6xl font-bold'>{user.displayName} <span className='text-primary'>Welcome</span></h1>

            </div>
        </div>
    );
};

export default UserDashboard;
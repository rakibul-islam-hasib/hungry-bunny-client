import React from 'react';

const ManageUsersTable = ({ userData }) => {
    return (
        <div className='flex mx-auto py-3 w-full'>
            <div className='flex w-2/5 items-center'>
                <img src={userData.photo} className="w-12 h-12 rounded-full mr-4" />
                <div className=''>
                    <h4 className="font-bold ">{userData.name}</h4>
                    <span className="text-gray-700">{userData.email}</span>
                    <br  className='bg-red-500 text-red-500'/>
                </div>
            </div>
            <div className='w-1/5'>
                <h1>{userData.role}</h1>
            </div>
            <div className='w-1/5'>
                <h1>Role</h1>
            </div>
            <div className='w-1/5'>
                <h1>Role</h1>
            </div>
        </div>
    );
};

export default ManageUsersTable;
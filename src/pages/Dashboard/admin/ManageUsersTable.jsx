import React from 'react';
import ManageAction from './ManageAction';

const ManageUsersTable = ({ userData }) => {
    return (
        <div className='flex mx-auto py-3 justify-between w-full'>
            <div className='flex w-2/5 items-center'>
                <img src={userData.photo} className="w-12 h-12 rounded-full mr-4" />
                <div className=''>
                    <h4 className="font-bold  ">{userData.name}</h4>
                    <span className="text-gray-700">{userData.email}</span>
                    <br  className='bg-red-500 text-red-500'/>
                </div>
            </div>
            <div className='w-1/5'>
                <span className=''>{userData.role}</span>
            </div>
            <div className='w-1/5'>
                <ManageAction/>
            </div>
        </div>
    );
};

export default ManageUsersTable;
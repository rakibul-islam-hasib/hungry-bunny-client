import React, { useState } from 'react';
import AdminCart from '../RestaurantAdmin/AdminCart';
import AdminDashboardChart from './AdminDashboardChart';
import AdminDashboardPieChart from './AdminDashboardPieChart';
import AdmonDashboardProgress from './AdmonDashboardProgress';
import AdminDashBoardList from './AdminDashBoardList';



const AdminDashboard = () => {
    
    return (
        <div className='mt-10'>
          <h3 className='text-center text-4xl font-bold py-5 '>Customers States</h3>
          <AdminDashboardChart/>
          {/* <AdminDashboardPieChart/> */}
          <h3 className='text-center text-4xl font-bold py-5 mt-10'>Restaurant States</h3>
          <div className="grid grid-cols-4 gap-4 mt-20">
            <div className='px-4 py-10 bg-orange-200 rounded-lg'>
                <h3 className='text-center text-2xl font-semibold'>Total Restaurant</h3>
                <h1 className='text-center text-4xl font-semibold'>48</h1>
            </div>
         
            <div className='px-4 py-10 bg-orange-200 rounded-lg'>
                <h3 className='text-center text-2xl font-semibold'>Total Employess</h3>
                <h1 className='text-center text-4xl font-semibold'>200</h1>
            </div>
         
            <div className='px-4 py-10 bg-orange-200 rounded-lg'>
                <h3 className='text-center text-2xl font-semibold'>Total Users</h3>
                <h1 className='text-center text-4xl font-semibold'>1148</h1>
            </div>
         
            <div className='px-4 py-10 bg-orange-200 rounded-lg'>
                <h3 className='text-center text-2xl font-semibold'>Total Menus</h3>
                <h1 className='text-center text-4xl font-semibold'>536</h1>
            </div>
         
          </div>

          <div className="grid grid-cols-2">
            <AdmonDashboardProgress/>
            <AdminDashBoardList/>
          </div>
   


        </div>

    );
};

export default AdminDashboard;
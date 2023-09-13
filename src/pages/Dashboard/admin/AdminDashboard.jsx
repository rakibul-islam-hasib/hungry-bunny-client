import React, { useState } from 'react';
import AdminCart from '../RestaurantAdmin/AdminCart';
import AdminDashboardReviews from './AdminDashboardReviews';


const AdminDashboard = () => {
    
    return (
        <div className='mt-10'>
          <h3 className='text-center text-4xl font-bold '>Restaurent States</h3>
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 md:px-24 md:py-16 lg:px-8 lg:py-20">
    <div className="row-gap-8 grid grid-cols-2 md:grid-cols-4">

        <div className="mb-12 text-center md:mb-0 md:border-r-2 dark:md:border-slate-500">
            <div className="font-heading text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
                733+
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base">
                Total Users
            </p>
        </div>

        <div className="mb-12 text-center md:mb-0 md:border-r-2 dark:md:border-slate-500">
            <div className="font-heading text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
                25+
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base">
               Restaurents
            </p>
        </div>

        <div className="mb-12 text-center md:mb-0 md:border-r-2 dark:md:border-slate-500">
            <div className="font-heading text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
                1K+
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base">
                Menus
            </p>
        </div>

       

    </div>

</div>

<div className="grid lg:grid-cols-2 gap-8" >
<div>
<h3 className='text-center text-2xl font-bold py-4'>Users States</h3>

<AdminCart/>
</div>

<AdminDashboardReviews/>
</div>
{/* Recent reviews */}


        </div>

    );
};

export default AdminDashboard;
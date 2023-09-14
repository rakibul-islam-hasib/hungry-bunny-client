import React from 'react';

const AdminDashBoardList = () => {
    return (
        <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1 p-4 mt-16">
        <h2 className="flex gap-3 items-center text-2xl m-auto  font-bold md:flex-col md:gap-2">
        Announcement
        </h2>
        <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            <li className="w-full bg-gray-100 dark:bg-white/5 p-3 rounded-md">
            It s time to celebrate and express our gratitude for all your hard work and dedication. To honor our incredible team, we re thrilled to announce Employee Appreciation Week!
            </li>
            <li className="w-full bg-gray-100 dark:bg-white/5 p-3 rounded-md">We believe in investing in your success, and we re dedicated to helping you reach your career goals.</li>
            <li className="w-full bg-gray-100 dark:bg-white/5 p-3 rounded-md">We are committed to helping you grow both personally and professionally. 
            </li>
        </ul>
    </div>
    );
};

export default AdminDashBoardList;
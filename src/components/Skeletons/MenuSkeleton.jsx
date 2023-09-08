import React from 'react';

const MenuSkeleton = () => {
    return (
        <div className="animate-pulse  bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 rounded-lg relative">
            <div className="w-full h-64 rounded-lg bg-gray-300 mx-auto transform transition duration-300 hover:scale-105"> </div>
            <div className="flex flex-col  my-3 space-y-2">
                <div className="w-48 bg-gray-300 py-3 "></div>
                <p className="w-full h-14 bg-gray-300 py-1"></p>

                <div className='flex justify-between'>
                    <p className="w-24 bg-gray-300 py-2"></p>
                    <span className="w-5  bg-gray-300 p-2 "></span>

                </div>
            </div>
        </div>
    );
};

export default MenuSkeleton;
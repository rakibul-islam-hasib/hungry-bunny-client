import React from 'react';

const CategorySkeleton = () => {
    return (
        <div className="animate-pulse  bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 rounded-lg relative">

            <div className="  my-3 space-y-2">
                <p className="w-48 h-24 rounded-lg bg-gray-300 py-1"></p>

            </div>
        </div>
    );
};

export default CategorySkeleton;
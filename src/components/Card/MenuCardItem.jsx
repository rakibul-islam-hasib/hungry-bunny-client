import React, { useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MenuCardItem = (menu) => {
  const { _id, food_name, category, description, restaurant_name, price, image } = menu


  const axios = useAxiosSecure();


  const cartHandler = (menu) => {

    // if (!userData) return toast.error('Please login first');
    console.log(menu)

    toast.promise(axios.post('/foodCart/cart/new', menu), {
      pending: 'Adding Food...',
      success: 'Food Added Successfully',
      error: 'Something went wrong , please try again later'

    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })


  };

  return (
    <div>




      <div key={_id} className={` border overflow-hidden shadow-lg rounded-md ${_id === 1 ? 'w-full' : ''}`}>
        <div>

          <img className="w-full h-64 object-cover transition transform duration-200  hover:-translate-y-2 rounded-lg relative    peer absolute top-0 right-0" src={image} alt="Food Image" />
          <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
            <path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" />
          </svg>
        </div>
        <div className=" py-4">
          <div className="font-semibold text-xl mb-2">{food_name}</div>
          <p className="text-sm text-gray-500">{description.slice(0, 70)}</p>
          <div className="flex items-center gap-2">
            <p>
              <span className="text-sm font-bold text-primary">{category}</span>
            </p>
            <p className='text-sm text-gray-400 font-bold'>By</p>
            <p className="text-sm font-bold text-slate-900">{restaurant_name}</p>
          </div>
          <div className="flex justify-between items-center  h-14">
            <span className="text-gray-600 font-semibold text-lg">{price} Taka</span>
            <button className=" ">
              <FaRegBookmark onClick={() => cartHandler(menu)} className="text-2xl transform transition duration-300 hover:scale-125" />

            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default MenuCardItem;
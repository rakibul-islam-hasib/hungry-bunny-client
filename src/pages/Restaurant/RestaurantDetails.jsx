import React from 'react';
import { useLoaderData } from 'react-router-dom';

function RestaurantDetails() {
    const restaurant = useLoaderData()
    console.log(restaurant.restaurantName);

    return (
        <div>
         <div className='mt-7 md:flex mb-4'>
        <div className='mt-6 w-[50%] mr-8'>
          <h3 className='font-extrabold text-4xl'>{restaurant.restaurantName}</h3>
          <p className='mt-4'> delivery.</p>
          <button className="bg-orange-600 hover:bg-orange-700 mt-8 text-white font-bold py-2 px-4 rounded-full flex items-center">
            become a partner
          </button>
        </div>
        <div className='w-[50%]'>
          <img src={restaurant.restaurantImage} className='w-full' alt="" />
        </div>
      </div>
        </div>
    );
}

export default RestaurantDetails;
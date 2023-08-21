import React from 'react';
import { useLoaderData } from 'react-router-dom';

function RestaurantDetails() {
    const restaurant = useLoaderData()
    console.log(restaurant);

    return (
        <div>
         <div className='mt-7 md:flex mb-4'>
        <div className='mt-6 w-[50%] mr-8'>
          <h3 className='font-extrabold text-4xl'>Empowering Culinary Creativity, One Delivery at a Time</h3>
          <p className='mt-4'>Join our Your Food Delivery Partner Name family and embark on a journey that celebrates culinary excellence. As a trusted delivery partner, we bridge the gap between talented chefs and eager diners. From kitchen to doorstep, we ensure that every dish retains its essence and arrives with care. Discover a new dimension of flavors with Your Food Delivery Partner Name, where passion for food meets seamless delivery.</p>
          <button className="bg-orange-600 hover:bg-orange-700 mt-8 text-white font-bold py-2 px-4 rounded-full flex items-center">
            become a partner
          </button>
        </div>
        <div className='w-[50%]'>
          <img style={{ height: 400 }} className='rounded-lg' src="https://qph.cf2.quoracdn.net/main-qimg-a61ce6a2849c8c7cb1de96a6afee4870-lq" alt="" />
        </div>
      </div>
        </div>
    );
}

export default RestaurantDetails;
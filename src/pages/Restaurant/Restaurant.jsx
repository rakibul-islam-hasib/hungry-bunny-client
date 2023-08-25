import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAxiosFetch from '../../hooks/useAxiosFetch';
import './restaurant.css'

const Restaurant = () => {
  const axios = useAxiosFetch([])
  const [ allRestaurants, setAllRestaurants ] = useState([])
  const [loading, setLoading ] = useState(true)
useEffect(() => {
   axios.get('/restaurant')
   .then(res => {
    setAllRestaurants(res.data)
   })
   .catch(error =>{
    console.log(error);
   })
   .finally(() => setLoading(false))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  if(loading) return <div className ="restaurant-loader mx-auto">
  <div className ="circle"></div>
  <div className ="circle"></div>
  <div className ="circle"></div>
  <div className ="circle"></div>
</div>
    return (
        <div>
            <div className="grid md:grid-cols-2 md:gap-8 gap-3 lg:grid-cols-3 mt-10 mx-auto ">
        {allRestaurants.map((item) => (
          <div key={item._id} className='p-2 border overflow-hidden shadow-lg rounded-md '>
          <img className="w-full  h-48 object-cover rounded-lg" src={item.restaurantImage} alt="Food Image" />
          <div className="px-6 py-4">
            <div className="mb-2">
              <p className='font-extrabold text-2xl'> {item.restaurantName}</p>
            </div>
              <div>
              <p className='font-bold flex'><span className='mr-2'><FaMapMarkerAlt className='text-orange-500 text-2xl'></FaMapMarkerAlt></span> <span>{item.place}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
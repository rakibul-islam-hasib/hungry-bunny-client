import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAxiosFetch from '../../hooks/useAxiosFetch';
import './restaurant.css'

const Restaurant = () => {
  const axios = useAxiosFetch([])
  const [allRestaurants, setAllRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('/restaurant')
      .then(res => {
        setAllRestaurants(res.data)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (loading) return <div className="restaurant-loader mx-auto">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
  return (
    <div>
      <div className="grid md:grid-cols-2 md:gap-8 gap-3 lg:grid-cols-3 mt-10 mx-auto ">
        {allRestaurants.map((item) => (
          // <div key={item._id} className='p-2 border overflow-hidden shadow-lg rounded-md '>
          //   <img className="w-full  h-48 object-cover rounded-lg" src={item.restaurantImage} alt="Food Image" />
          //   <div className="px-6 py-4">
          //     <div className="mb-2">
          //       <p className='font-extrabold text-2xl'> {item.restaurantName}</p>
          //     </div>
          //     <div className='flex justify-between'>
          //       <p className='font-bold flex'><span className='mr-2'><FaMapMarkerAlt className='text-orange-500 text-2xl'></FaMapMarkerAlt></span> <span>{item.place}</span></p>

          //       <Link to={`/restaurant/${item._id}`} className='btn '>Details</Link>
          //     </div>
          //   </div>
          // </div>

          <div key={item._id} className=" bg-white shadow-lg rounded-lg overflow-hidden my-10">
            <img className="w-full  h-60 object-cover rounded-lg" src={item.restaurantImage} alt="Food Image" />
            <div className="px-4 py-2">
              <h1 className="text-gray-900 font-bold text-2xl uppercase">{item.restaurantName}</h1>
              <p className="text-gray-600 text-sm mt-1">{item.descriptionFirst.slice(0, 150)}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2 ">
              <h1 className=" font-bold text-xl">{item.place}</h1>
              <Link to={`/restaurant/${item._id}`} className="px-5 py-2 text-sm font-semibold bg-gradient-to-br from-blue-800 to-gray-700 text-white rounded-md border-2 border-blue-800 hover:bg-blue-800   transform hover:scale-105 transition duration-300 ease-in-out">
                Details
              </Link >

            </div>
          </div>



        ))}
      </div>
    </div>
  );
};

export default Restaurant;
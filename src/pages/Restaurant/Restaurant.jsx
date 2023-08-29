import React, { useEffect, useState } from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAxiosFetch from '../../hooks/useAxiosFetch';
import './restaurant.css'
import { Pagination } from '@mui/material';

const Restaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  // console.log(page)
  const [totalItem, setTotalItem] = useState(1);
  const totalPage = Math.ceil(totalItem / 3);
  const axios = useAxiosFetch();
  useEffect(() => {
    axios.get('/restaurant/total/count')
      .then(res => setTotalItem(res.data.total))
      .catch(err => console.log(err))

    axios.get(`/restaurant?limit=3&page=${page}`)
      .then(res => setAllRestaurants(res.data))
      .catch(err => console.log(err))
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <div>
      <div>
      <div className='bg-orange-50 dark:bg-gradient-to-r from-cyan-400 to-blue-300  mt-5 pt-8 pb-8 rounded-3xl drop-shadow-lg'>
          <div className='text-center mx-auto'>
            <h2 className='text-4xl font-extrabold mb-6 text-purple-800 uppercase'>see available restaurant</h2>
            <h2 className='text-2xl font-bold text-slate-800 dark:text-white mb-4'> Rediscovering Traditional Flavors with a Modern Twist</h2>
          </div>
          <div className='md:flex ml-6 md:ml-96'>
            <input type="text" className='rounded-2xl w-[40%] text-2xl dark:text-black' placeholder='search restaurant' />
            <button className='bg-orange-500 text-white pl-7 pr-7 pt-3 pb-3 text-4xl rounded-2xl ml-5'>search</button>
          </div>
          </div>
      <div className='p-10 md:w-[90%] bottom-10 rounded-3xl bg-white mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className=''>
          <p className='flex items-center'><span className='text-4xl font-extrabold'> 30</span> <span className='text-4xl font-extrabold'>+</span></p>
          <p className='text-2xl'>Food Vendors</p>
        </div>
        <div className=''>
          <p className='flex items-center'><span className='text-4xl font-extrabold'>300</span> <span className='text-4xl font-extrabold'>+</span></p>
          <p className='text-2xl'>Food items</p>
        </div>
        <div className=''>
          <p className='flex items-center'><span className='text-4xl font-extrabold'>30</span> <span className='text-4xl font-extrabold'>%</span></p>
          <p className='text-2xl'>Birthday Specials</p>
        </div>
        <div className=''>
          <p className='flex items-center'><span className='text-4xl font-extrabold'>25</span> <span className='text-4xl font-extrabold'>%</span></p>
          <p className='text-2xl'>Exclusive Membership</p>
        </div>
      </div>
      </div>
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

          <div key={item._id} className=" bg-white dark:drop-shadow-lg shadow-lg dark:border-2 dark:border-white dark:bg-black dark:text-white rounded-lg overflow-hidden my-5">
            <img className="w-full h-60 object-cover rounded-lg" src={item.restaurantImage} alt="Food Image" />
            <div className="px-4 py-2">
              <h1 className="text-gray-900 dark:text-white font-bold text-2xl uppercase mt-3 mb-2">{item.restaurantName}</h1>
              <p className="text-gray-600 dark:text-white text-sm mt-1">{item.descriptionFirst.slice(0, 150)}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2 ">
              <h1 className=" font-bold text-xl">{item.place}</h1>
              <Link to={`/restaurant/${item._id}`} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
                Details
              </Link >

            </div>
          </div>

        ))}
      </div>
       {/* Pagination  */}
       <div className="mt-10 mb-5 text-right text-4xl mx-auto sm:w-[40%] md:w-[20%]">
        <Pagination className='text-right text-4xl font-bold pt-5 pb-5 pr-4 pl-4 rounded-2xl dark:bg-white' onChange={(e, vale) => setPage(vale)} count={totalPage} color="secondary" />
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Restaurant;
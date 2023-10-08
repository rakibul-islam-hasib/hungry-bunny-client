import React, { useEffect, useState } from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import { FaArrowRight, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAxiosFetch from '../../hooks/useAxiosFetch';
import './restaurant.css'
import { Pagination } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import CountUp from 'react-countup';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Restaurant = () => {
  // const [searchQuery, setSearchQuery] = useState('')
  // const [isFieldClicked, setFieldClicked] = useState(false);

  const [allRestaurants, setAllRestaurants] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  // console.log(page)
  const [totalItem, setTotalItem] = useState(1);
  const totalPage = Math.ceil(totalItem / 6);
  const axios = useAxiosFetch();
  // console.log(totalItem)

  useEffect(() => {
    axios.get('/application/total/count/')
      .then(res => {
        const restaurants = res.data.total.filter(item => item.status === 'approved')
        // setAllRestaurants(restaurants)
        setTotalItem(restaurants)
      })
      .catch(err => console.log(err))

    axios.get(`/application?limit=6&page=${page}`)
      .then(res => {
        const restaurants = res.data.filter(item => item.status === 'approved')
        setAllRestaurants(restaurants)
        console.log(restaurants)
        // console.log(restaurants);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  if (loading) return <div className="h-[300px] flex justify-center items-center w-full">
    <AiOutlineLoading3Quarters className="text-5xl text-primary animate-spin" />
  </div>


  return (
    <div>

      <div className=''>
        <div style={{ height: 600, position: 'relative' }} className="pb-8 mt-5 pt-8 bg-fixed bg-[url('http://gomoto.like-themes.com/wp-content/uploads/2019/06/INNER_header_02.jpg')] rounded-2xl ">

          <div
            className='absolute top-0 left-0 w-full h-full bg-opacity-50 bg-gray-800'
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust overlay color and opacity here
            }}
          ></div>

          <div className='absolute z-20 w-full'>
            <div className='text-center mx-auto mt-64 bg-gradient-to-r from-[rgba(21, 21, 21, 21)] to-[rgba(21, 21, 21, 21)]'>
              <h2 className='text-6xl font-extrabold mb-6 uppercase text-white'>see available restaurant</h2>
              <h2 className='text-2xl text-white font-bold mb-4'> Rediscovering Traditional Flavors with a Modern Twist</h2>
            </div>

            <div className='p-10 md:w-[90%] -mb-24 border-4 border-orange-400 dark:bg-black dark:text-white mt-10 bottom-10 rounded-3xl bg-white mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              <div className=''>
                <p className='flex items-center'><span className='text-4xl font-extrabold'> <CountUp end={30} /></span> <span className='text-4xl font-extrabold'>+</span></p>
                <p className='text-2xl'>Food Vendors</p>
              </div>
              <div className=''>
                <p className='flex items-center'><span className='text-4xl font-extrabold'><CountUp end={300} /></span> <span className='text-4xl font-extrabold'>+</span></p>
                <p className='text-2xl'>Food items</p>
              </div>
              <div className=''>
                <p className='flex items-center'><span className='text-4xl font-extrabold'><CountUp end={30} /></span> <span className='text-4xl font-extrabold'>%</span></p>
                <p className='text-2xl'>Birthday Specials</p>
              </div>
              <div className=''>
                <p className='flex items-center'><span className='text-4xl font-extrabold'><CountUp end={25} /></span> <span className='text-4xl font-extrabold'>%</span></p>
                <p className='text-2xl'>Exclusive Membership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-32 md:gap-8 gap-3 lg:grid-cols-3 mx-auto ">
        {allRestaurants.map((item) => (
          <div key={item._id} className='p-2 border dark:border-2 dark:border-orange-500 overflow-hidden shadow-lg rounded-xl'>
            <img className="w-full  h-64 object-cover rounded-lg" src={item?.image} alt="Food Image" />
            <div className="px-6 py-4">
              <div className="mb-2 dark:text-gray-200">
                <p className='flex justify-between items-center font-extrabold text-2xl'> <span>{item.restaurant_name}</span> <span><Rating
                  style={{ maxWidth: 100 }}
                  value={item.rating}
                  readOnly
                /></span></p>
                <p>{item?.description.slice(0, 70)}</p>
              </div>
              <div className='flex justify-between dark:text-gray-200'>
                <p className='font-bold flex'><span className='mr-2'><FaMapMarkerAlt className='text-orange-500 text-2xl'></FaMapMarkerAlt></span> <span>{item.location}</span></p>

                <Link to={`/application/${item?._id}`} className='bg-orange-500 border-2 border-orange-500 hover:bg-white hover:text-orange-500 hover:transition hover:duration-400 text-white font-bold py-2 px-4 rounded-2xl flex items-center'><span>details</span> <span className="ml-3"><FaArrowRight /></span></Link>
              </div>
            </div>
          </div>

        ))}
      </div>
      {/* Pagination  */}
      <div className="mt-10 mb-5 text-4xl mx-auto sm:w-[40%] md:w-[20%]">
        <Pagination className='text-4xl font-bold pt-5 pb-5 pr-4 pl-4 rounded-2xl dark:bg-white' onChange={(e, vale) => setPage(vale)} count={totalPage} color="secondary" />
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Restaurant;
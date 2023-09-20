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

const Restaurant = () => {
  // const [searchQuery, setSearchQuery] = useState('')
  // const [isFieldClicked, setFieldClicked] = useState(false);

  const [allRestaurants, setAllRestaurants] = useState([]);

  const [page, setPage] = useState(1);

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
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])
  // useEffect(() => {
  //   axios.get(`/restaurant/search/query?name=${searchQuery}`)
  //     .then(res => {
  //       setAllRestaurants(res.data)
  //       setTotalItem(res.data.length)
  //     })
  //     .catch(error => console.log(error))
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchQuery])
  // const handleSearch = () => {
  //   axios.get(`/restaurant/search?query=${searchQuery}`)
  //     .then(res => setAllRestaurants(res.data))
  //     .catch(error => console.log(error))
  // }

  // 
  return (
    <div>
      <Helmet>
        <title>Hungry Bunny || restaurant</title>
      </Helmet>
      <div className=''>
        <div style={{height:600}} className="pb-8 mt-5 pt-8 bg-fixed bg-[url('http://gomoto.like-themes.com/wp-content/uploads/2019/06/INNER_header_02.jpg')] rounded-2xl ">
         <div className=''>
         <div className='text-center mx-auto mt-64 bg-gradient-to-r from-[rgba(21, 21, 21, 21)] to-[rgba(21, 21, 21, 21)]'>
            <h2 className='text-6xl font-extrabold mb-6 uppercase text-white'>see available restaurant</h2>
            <h2 className='text-2xl text-white font-bold mb-4'> Rediscovering Traditional Flavors with a Modern Twist</h2>
          </div>
          {/* <div className='w-1/2 mx-auto'>
                <form className='mt-10'>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
        onClick={() => setFieldClicked(true)}
        onBlur={() => setFieldClicked(false)}
        type="search"
          id="default-search"
          className="block w-full p-3 pl-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
          placeholder="Search blogs "
          required
        />
        <button
        onClick={handleSearch}
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-black duration-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Search
        </button>
      </div>
    </form>
                </div> */}
          {/* <div className='flex items-center mx-auto mb-10'>
          <div className="relative max-w-sm mx-auto mt-7 flex">
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full py-3 px-5 text-4xl rounded-full ${
                    isFieldClicked ? '' : 'border-2 border-orange-500'
                }`}
                type="search"
                placeholder="Search restaurant"
                onClick={() => setFieldClicked(true)}
                onBlur={() => setFieldClicked(false)}
            />
            <button  onClick={handleSearch}
                className="absolute inset-y-0 right-0 flex items-center px-8 text-gray-700 bg-orange-500 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2"
            >
                <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                    />
                </svg>
            </button>
        </div>
            
          </div> */}
          <div className='p-10 md:w-[90%] -mb-36 border-4 border-orange-400 dark:bg-black dark:text-white mt-10 bottom-10 rounded-3xl bg-white mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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
            <img className="w-full  h-64 object-cover rounded-lg" src={item.restaurantImage} alt="Food Image" />
            <div className="px-6 py-4">
              <div className="mb-2 dark:text-gray-200">
                <p className='flex justify-between items-center font-extrabold text-2xl'> <span>{item.restaurant_name}</span> <span><Rating
        style={{ maxWidth: 100 }}
        value={item.rating}
        readOnly
      /></span></p>
              </div>
              <div className='flex justify-between dark:text-gray-200'>
                <p className='font-bold flex'><span className='mr-2'><FaMapMarkerAlt className='text-orange-500 text-2xl'></FaMapMarkerAlt></span> <span>{item.location}</span></p>
                
                <Link to={`/application/${item._id}`} className='bg-orange-500 border-2 border-orange-500 hover:bg-white hover:text-orange-500 hover:transition hover:duration-400 text-white font-bold py-2 px-4 rounded-2xl flex items-center'><span>read more</span> <span className="ml-3"><FaArrowRight/></span></Link>
              </div>
            </div>
          </div>
          
        ))}
      </div>
      {/* Pagination  */}
      {/* <div className="mt-10 mb-5 text-4xl mx-auto sm:w-[40%] md:w-[20%]">
        <Pagination className='text-4xl font-bold pt-5 pb-5 pr-4 pl-4 rounded-2xl dark:bg-white' onChange={(e, vale) => setPage(vale)} count={totalPage} color="secondary" />
      </div>
      <ScrollRestoration /> */}
    </div>
  );
};

export default Restaurant;
import React, { useEffect, useState } from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import { FaArrowRight, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAxiosFetch from '../../hooks/useAxiosFetch';
import './restaurant.css'
import { Pagination } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const Restaurant = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isFieldClicked, setFieldClicked] = useState(false);

  const [allRestaurants, setAllRestaurants] = useState([]);

  const [page, setPage] = useState(1);

  // console.log(page)
  const [totalItem, setTotalItem] = useState(1);
  const totalPage = Math.ceil(totalItem / 6);
  const axios = useAxiosFetch();
  console.log(totalItem)

  useEffect(() => {
    axios.get('/restaurant/total/count')
      .then(res => setTotalItem(res.data.total))
      .catch(err => console.log(err))

    axios.get(`/restaurant?limit=6&page=${page}`)
      .then(res => setAllRestaurants(res.data))
      .catch(err => console.log(err))
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])
  useEffect(() => {
    axios.get(`/restaurant/search/query?name=${searchQuery}`)
      .then(res => {
        setAllRestaurants(res.data)
        setTotalItem(res.data.length)
      })
      .catch(error => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])
  const handleSearch = () => {
    axios.get(`/restaurant/search?query=${searchQuery}`)
      .then(res => setAllRestaurants(res.data))
      .catch(error => console.log(error))
  }

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
          <div className='flex items-center mx-auto mb-10'>
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
            {/* <input type="text" name='search-data' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='rounded-3xl w-[40%] md:ml-80 pt-4 pb-4 border-0 text-2xl dark:text-black pl-5' placeholder='search restaurant' />
            <button onClick={handleSearch} className='bg-blue-500 text-white pl-7 pr-7 pt-3 pb-3 text-4xl rounded-3xl ml-2'><FaLocationArrow /> </button> */}

            {/* <input type="text" name="" className='w-full lg:w-[300px] dark:bg-gray-200 py-3 pl-4 text-black rounded-lg' id="" />
            <button className='class="absolute bg-black text-white font-bold py-2 rounded-lg px-2 right-1 top-1"'>search</button> */}
          </div>
          <div className='p-10 md:w-[90%] -mb-36 border-4 border-orange-400 dark:bg-black dark:text-white mt-10 bottom-10 rounded-3xl bg-white mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-32 md:gap-8 gap-3 lg:grid-cols-3 mx-auto ">
        {allRestaurants.map((item) => (
          <div key={item._id} className='p-2 border dark:border-2 dark:border-orange-500 overflow-hidden shadow-lg rounded-xl'>
            <img className="w-full  h-64 object-cover rounded-lg" src={item.restaurantImage} alt="Food Image" />
            <div className="px-6 py-4">
              <div className="mb-2 dark:text-gray-200">
                <p className='flex justify-between items-center font-extrabold text-2xl'> <span>{item.restaurantName}</span> <span><Rating
        style={{ maxWidth: 100 }}
        value={item.rating}
        readOnly
      /></span></p>
              </div>
              <div className='flex justify-between dark:text-gray-200'>
                <p className='font-bold flex'><span className='mr-2'><FaMapMarkerAlt className='text-orange-500 text-2xl'></FaMapMarkerAlt></span> <span>{item.place}</span></p>
                
                <Link to={`/restaurant/${item._id}`} className='bg-orange-500 border-2 border-orange-500 hover:bg-white hover:text-orange-500 hover:transition hover:duration-400 text-white font-bold py-2 px-4 rounded-2xl flex items-center'><span>read more</span> <span className="ml-3"><FaArrowRight/></span></Link>
              </div>
            </div>
          </div>

//       <div key={item._id} className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
// <div className='h-96 w-96 '>
//   <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={item.restaurantImage} alt="" />
// </div>
// <div className="absolute insert-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
// <div className='absolute inset-0 items-center text-center px-9 translate-y-[60%] group-hover:translate-x-0 transition-all'>
//  <h3> tufael</h3>
//  <p className='text-lg italic text-white mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, at!</p>
//   <button className='rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5  '>read more</button>
//   </div>
//       </div>
          

          // <div key={item._id} className=" bg-white mt-36 dark:drop-shadow-lg shadow-lg dark:border-2 dark:border-orange-300 dark:bg-black dark:text-white rounded-lg overflow-hidden my-5">
          //   <img className="w-full h-60 object-cover rounded-lg" src={item.restaurantImage} alt="Food Image" />
          //   <div className="px-4 py-2">
          //     <h1 className="text-gray-900 dark:text-white font-bold text-2xl uppercase mt-3 mb-2">{item.restaurantName}</h1>
          //     <p className="text-gray-600 dark:text-white text-sm mt-1">{item.descriptionFirst.slice(0, 150)}</p>
          //   </div>
          //   <div className="flex items-center justify-between px-4 py-2 ">
          //     <h1 className=" font-bold text-xl">{item.place}</h1>
          //     <Link to={`/restaurant/${item._id}`} className="bg-orange-500 hover:bg-orange-600 hover:transition hover:duration-400 text-white font-bold py-2 px-4 rounded-full flex items-center">
          //       Details
          //     </Link >

          //   </div>
          // </div>

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
import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { BsStopwatch } from 'react-icons/bs';
import { MdOutlineLocalOffer, MdDirectionsBike } from 'react-icons/md';
import { PiBowlFood } from 'react-icons/pi';
import { AiOutlinePlus } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import Subscribe from '../about/Subscribe';
import { Helmet } from 'react-helmet-async';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import { useTitle } from '../../hooks/useTitle';

function RestaurantDetails() {
  const restaurant = useLoaderData()
  const axios = useAxiosFetch()
  const [foods, setFoods] = useState([])
  useTitle(`${restaurant?.restaurant_name} - restaurant details`)

  useEffect(() => {
    axios.get(`/food/get/${restaurant?._id}`)
      .then(res => {
        setFoods(res.data);
        console.log(res.data);
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div className='sm:ml-5 dark:text-slate-200'>
      <Helmet>
        <title>Hungry Bunny || restaurant details</title>
      </Helmet>
      <div className='mt-7 md:flex mb-4 sm:ml-5'>
        <div className='mt-4 md:w-[50%] md:mr-8'>
          <h3 className='font-extrabold text-4xl mb-7'>{restaurant?.restaurant_name}</h3>
          <h3 className='text-2xl'>{restaurant?.description}</h3>
          <div className='flex'>
            <button className="drop-shadow-lg mr-10 hover:transition hover:duration-600 bg-orange-500 border-2 border-white hover:text-orange-500 hover:bg-white mt-8 text-white font-bold py-2 px-4 pt-3 uppercase text-2xl rounded-full items-center">
              order now
            </button>
            <button className="drop-shadow-lg hover:transition hover:duration-600 bg-white border-2 border-orange-500 hover:text-white hover:bg-orange-500 mt-8 text-orange-500 font-bold py-2 px-4 pt-3 uppercase text-2xl rounded-full items-center">
              follow
            </button>
          </div>

        </div>
        <div className='md:w-[50%]'>
          <img src={restaurant?.image} className='w-full sm:m-5 rounded-2xl' alt="" />
        </div>
      </div>
      {/* add new section */}
      <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-10 mb-10'>
        <div className='p-7 bg-white relative group hover:-translate-y-4 hover:transition duration-500 rounded-3xl drop-shadow-lg hover:text-white hover:bg-orange-500 dark:bg-black dark:text-white dark:border-2 dark:border-orange-500 dark:hover:bg-orange-500'>
          <p className='text-7xl ml-3'><MdDirectionsBike /> </p>
          <h3 className='text-4xl font-bold'>Fast Delivery</h3>
          <p className='mt-4 mb-4'>Fast food delivery is the ultimate solution for those moments when you crave mouthwatering, convenient, and delicious meals without the hassle of cooking or leaving your home.</p>
        </div>
        <div className='p-7 bg-white relative group hover:-translate-y-4 hover:transition duration-500 rounded-3xl drop-shadow-lg hover:text-white hover:bg-orange-500 dark:bg-black dark:text-white dark:border-2 dark:border-orange-500 dark:hover:bg-orange-500'>
          <p className='text-7xl ml-3 hover:text-white'><BsStopwatch /> </p>
          <h3 className='text-4xl font-bold'>Save your Time</h3>
          <p className='mt-4 mb-4'>Save time with our swift food delivery service. Spend less time in the kitchen and more time enjoying your meals, all with just a few clicks.</p>
        </div>
        <div className='p-7 bg-white relative group hover:-translate-y-4 hover:transition duration-500 rounded-3xl drop-shadow-lg hover:text-white hover:bg-orange-500 dark:bg-black dark:text-white dark:border-2 dark:border-orange-500 dark:hover:bg-orange-500'>
          <p className='text-7xl ml-3 hover:text-white'><MdOutlineLocalOffer /> </p>
          <h3 className='text-4xl font-bold'>Regular Discount</h3>
          <p className='mt-4 mb-4'>Unlock regular discounts for loyal customers. Enjoy savings on your favorite dishes with our exclusive offers, making dining with us even more satisfying.</p>
        </div>
        <div className='p-7 bg-white relative group hover:-translate-y-4 hover:transition duration-500 rounded-3xl drop-shadow-lg hover:text-white hover:bg-orange-500 dark:bg-black dark:text-white dark:border-2 dark:border-orange-500 dark:hover:bg-orange-500'>
          <p className='text-7xl ml-3 hover:text-white'><PiBowlFood /> </p>
          <h3 className='text-4xl font-bold'>Variety Foods</h3>
          <p className='mt-4 mb-4'>Explore a world of diverse flavors. Our menu boasts a variety of cuisines, promising an exciting dining adventure with every order.</p>
        </div>
      </div>
      <div className='flex items-center justify-between mb-12 mt-6'>
        <h2 className='text-3xl mt-8 font-bold'>All Food Items</h2>
        <form className='mt-10 w-[50%]'>
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
              type="search"
              id="default-search"
              className="block w-full p-3 pl-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="Search food item, category "
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-black duration-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {/* food restaurant card */}
      <div className="dark:text-slate-300">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-3 mb-14">
          {
            foods.map((items) =>
              //       <div key={idx} className='p-2 border overflow-hidden shadow-lg rounded-2xl'>
              //       <img className="w-full h-60 object-cover rounded-lg" src={items.foodImage} alt="Food Image" />
              //       <div className='w-full relative group hover:-translate-y-4 duration-500'>
              //         <div className=''>
              //         <p className='font-bold flex justify-between mt-2'><span><Rating
              //   style={{ maxWidth: 100 }}
              //   value={items.foodRating}
              //   readOnly
              // /></span> <span className='flex text-2xl items-center'><BiLike className='mr-2'/> 0 </span></p>
              //       <div className="px-2 py-2">
              //         <div className="mb-2">
              //           <p className='font-extrabold text-2xl dark:text-slate-300'>Food Name {items.foodItem}</p>
              //         </div>
              //           <p className='font-extrabold'>{items.description.slice(0, 60)}</p>
              //           <div className='font-bold flex justify-between items-center mt-2'>
              //           <p className='mr-2 text-2xl'>$ {items.price}</p>
              //           <button className="drop-shadow-lg hover:transition duration-600 bg-orange-500 border-2 border-orange-500 hover:text-orange-500 hover:bg-white text-white font-bold py-1 px-3 rounded-full flex items-center">
              //             <span>add to cart</span> <span className='ml-2'><FaShoppingCart/> </span>
              //           </button>
              //           </div>

              //       </div>
              //         </div>
              //       </div>
              //     </div>
              <div key={items?._id} className={` border overflow-hidden shadow-lg rounded-md ${items?._id === 1 ? 'w-full' : ''}`}>
                <div>

                  <img className="w-full h-64 object-cover transition transform duration-200  hover:-translate-y-2 rounded-lg relative peer top-0 right-0" src={items?.image} alt="Food Image" />
                  {/* <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
              <path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" />
            </svg> */}
                </div>
                <div className="p-4">
                  <div className="font-semibold text-xl mb-2 flex justify-between"><span>{items?.food_name}</span><span></span></div>
                  <p className="text-sm text-gray-800 flex hover:text-2xl dark:text-gray-300 justify-between duration-500"><span>{items?.description.slice(0, 100)}</span> </p>

                  <div className="flex justify-between items-center  h-14">
                    <span className="text-orange-500 font-semibold text-2xl">{items?.price} Taka</span>
                    <button className=" text-orange-500 text-4xl hover:text-6xl duration-500">
                      <span><FaShoppingCart /></span>
                      {/* <FaRegBookmark onClick={() => cartHandler(menu)} className="text-2xl transform transition duration-300 hover:scale-125" /> */}

                    </button>
                  </div>
                </div>
              </div>
            )}
        </div>
        <Subscribe />
        {/* <div className='md:w-[25%]'>

      <div className='mt-10 p-2  rounded-2xl drop-shadow-lg dark:bg-black'>
       <div className='drop-shadow-lg ml-4 dark:bg-black border-4 border-orange-400 p-2 rounded-xl'>
       <h2 className='text-center text-4xl font-extrabold mb-5'>Popular Dish Item</h2>
       {
        restaurant.popularDish.map((item, id) => 
        <p key={item.id} className='font-semibold mb-5 flex bg-white rounded-2xl hover:bg-orange-500 text-slate-800 hover:text-white p-1 justify-between ml-1 items-center mt-2 text-2xl'><span> {item.dishName}</span><span><FaArrowRight/></span></p>)
       }

       </div>
     
      </div>
      <div className='mt-20 rounded-xl border-4 border-orange-400 pl-4 pr-4 pt-10 pb-10 ml-7'>
        <h2 className='mb-6 text-center uppercase font-bold text-4xl'>contact & service</h2>
       <p className='text-2xl'>Email</p>
        <p className='flex mb-5 items-center justify-between p-1 bg-white rounded-2xl hover:bg-orange-500 text-slate-800 hover:text-white text-2xl'><span className='flex items-center'><FaMailBulk/> {restaurant.email}</span> <span><FaArrowRight/> </span></p>
       <p className='text-2xl'>Service</p>
        <p className='flex items-center justify-between p-1 bg-white rounded-2xl hover:bg-orange-500 text-slate-800 hover:text-white text-2xl'><span className='flex items-center'><FaUserAstronaut/> {restaurant.service}</span> <span><FaArrowRight/> </span></p>
      </div>
      </div> */}

      </div>
    </div>
  );
}

export default RestaurantDetails;
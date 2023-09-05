import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaArrowRight, FaMailBulk, FaShoppingCart, FaUserAstronaut } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';

function RestaurantDetails() {
    const restaurant = useLoaderData()
    console.log(restaurant.restaurantName);

    return (
        <div className='sm:ml-5 dark:text-slate-200'>
         <div className='mt-7 md:flex mb-4 sm:ml-5'>
        <div className='mt-4 md:w-[50%] md:mr-8'>
          <h3 className='font-extrabold text-4xl'>{restaurant.restaurantName}</h3>
          <p className='mt-3 md:mr-7'> {restaurant.descriptionFirst}</p>
          <p className='mt-3 md:mr-7'> {restaurant.descriptionSecond}</p>
         <div className='flex'>
         <button className="drop-shadow-lg mr-10 hover:transition hover:duration-600 bg-orange-500 border-2 border-white hover:text-orange-500 hover:bg-white mt-8 text-white font-bold py-2 px-4 uppercase text-2xl rounded-full items-center">
            order now
          </button>
          <button className="drop-shadow-lg hover:transition hover:duration-600 bg-white border-2 border-orange-500 hover:text-white hover:bg-orange-500 mt-8 text-orange-500 font-bold py-2 px-4 uppercase text-2xl rounded-full items-center">
            order now
          </button>
         </div>
          {/* <div className='mt-3 mb-3 flex text-center'>
        <div className='border-2 sm:w-[50%] md:w-[40%] hover:transition hover:duration-400 rounded-2xl mr-16 border-orange-400 pr-4 pl-4 hover:bg-orange-500 hover:text-white '>
          <p className='text-4xl'><span>5000</span> <span className='text-6xl'>+</span></p>
          <p className='text-2xl'>happy customer</p>
        </div>
        <div className='border-2 sm:w-[50%] md:w-[40%] hover:transition hover:duration-400 rounded-2xl mr-16 border-orange-400 pr-4 pl-4 hover:bg-orange-500 hover:text-slate-200 '>
          <p className='text-4xl'><span>115</span> <span className='text-6xl'>+</span></p>
          <p className='text-2xl'>recipe</p>
        </div>
        
      </div> */}
          {/* <div className='flex justify-evenly restaurants-center mt-7 mb-5'>
          <button className="bg-orange-500 hover:transition hover:duration-400 hover:bg-orange-600 text-slate-200 font-bold py-2 px-4 rounded-full flex restaurants-center">
            become a partner
          </button>
          <Rating
      style={{ maxWidth: 140 }}
      value={restaurant.rating}
      readOnly
    />
          </div> */}
        </div>
        <div className='md:w-[50%]'>
          <img src={restaurant.restaurantImage} className='w-full sm:m-5 rounded-2xl' alt="" />
        </div>
      </div>

      

    {/* food restaurant card */}
<div className="md:flex dark:text-slate-300">
<div className="grid md:grid-cols-2 md:gap-8 gap-3 lg:grid-cols-3 mt-10 md:w-[75%] mb-14">
          {
            restaurant.foodItems.map((items, idx) => <div key={items.idx} className='p-2 border overflow-hidden shadow-lg rounded-2xl'>
            <img className="w-full h-48 object-cover rounded-lg" src={items.foodImage} alt="Food Image" />
            <p className='font-bold flex justify-between mt-2'><span><Rating
        style={{ maxWidth: 100 }}
        value={items.foodRating}
        readOnly
      /></span> <span className='flex text-2xl items-center'><BiLike className='mr-2'/> 0 </span></p>
            <div className="px-2 py-4">
              <div className="mb-2">
                <p className='font-extrabold text-2xl dark:text-slate-300'>Food Name {items.foodItem}</p>
              </div>
                <p className='font-extrabold'>{items.description}</p>
                <div className='font-bold flex justify-between items-center mt-2'>
                <p className='mr-2 text-2xl'>$ {items.price}</p>
                <button className="drop-shadow-lg hover:transition hover:duration-600 bg-orange-500 border-2 border-orange-500 hover:text-orange-500 hover:bg-white text-white font-bold py-1 px-3 rounded-full flex items-center">
                  <span>add to cart</span> <span className='ml-2'><FaShoppingCart/> </span>
                </button>
                </div>
                
            </div>
          </div>)
          }

      </div>
      <div className='md:w-[25%]'>

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
      </div>

</div>
        </div>
    );
}

export default RestaurantDetails;
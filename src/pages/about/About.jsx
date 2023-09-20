import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { PiBowlFood, PiVanDuotone } from 'react-icons/pi';
import Subscribe from './Subscribe';
import { useTitle } from '../../hooks/useTitle';
import CountUp from 'react-countup';

const About = () => {
  useTitle('About')
  return (
    <div className='mx-auto font-sans justify-center items-center ml-5 dark:text-slate-300'>

      {/* <div className="bg-fixed w-full bg-[url('https://images.pexels.com/photos/6646953/pexels-photo-6646953.jpeg?auto=compress&cs=tinysrgb&w=1600')]" style={{height:700}}>
        <img className="w-full rounded-2xl bg-fixed" src='' style={{ height: 800 }} alt="delivery picture" />
<div className=' text-center mb-32'>
<h3 className='text-white font-extrabold text-6xl pt-44'>Hungry Bunny</h3>
<h3 className='text-slate-200 mt-8 font-extrabold text-2xl sm:mr-10 sm:ml-10 md:mr-32 md:ml-32'>Indulge in culinary convenience through our food delivery. Enjoy restaurant-quality meals in the comfort of home – a simple click for fresh, delightful flavors at your doorstep</h3>

</div>
      </div> */}
      <div className='md:flex mb-10'>
        <div className='mt-10 md:w-[50%] pr-10'>
          <p className='text-4xl font-extrabold text-slate-800'>About Us</p>
          <p className='text-2xl mt-10 mb-6'>Discover culinary delights delivered to your door. We partner with local restaurants and chefs to bring you a diverse, delicious menu, ensuring satisfaction with every order.</p>
          <button className="drop-shadow-lg hover:transition hover:duration-400 border-orange-500 hover:text-orange-500 hover:bg-white mt-8 text-white bg-orange-500 border-2 font-bold py-2 px-4 rounded-full flex items-center">
            SEND EMAIL
          </button>
        </div>
        <div className='md:w-[50%]'>
          <img className='rounded-3xl' src="https://images.pexels.com/photos/6605268/pexels-photo-6605268.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
      </div>
      <div className=' mb-10 font-bold sm:my-3 md:ml-10 sm:gap-x-3 grid sm:grid-cols-2 md:grid-cols-4 text-center'>
        <div className='border-2 hover:transition hover:duration-400 pt sm:mb-3 rounded-2xl md:mr-16 border-orange-400 pr-2 pl-3 pb-2 hover:bg-orange-500 hover:text-white '>
          <p className='text-4xl'><span><CountUp end={500} /></span> <span className='text-6xl'>+</span></p>
          <p className='text-2xl'>happy customer</p>
        </div>
        <div className='border-2 hover:transition hover:duration-400 sm:mb-3 rounded-2xl md:mr-16 border-orange-400 pr-2 pl-3 pb-2 hover:bg-orange-500 hover:text-white '>
          <p className='text-4xl'><span><CountUp end={24}  /></span>/<span><CountUp end={7} /></span> <span className='text-6xl'></span></p>
          <p className='text-2xl'>service</p>
        </div>
        <div className='border-2 hover:transition hover:duration-400 sm:mb-3 rounded-2xl md:mr-16 border-orange-400 pr-2 pl-3 pb-2 hover:bg-orange-500 hover:text-white '>
          <p className='text-4xl'><span><CountUp end={50} /></span> <span className='text-6xl'>+</span></p>
          <p className='text-2xl'>restaurant</p>
        </div>
        <div className='border-2 hover:transition hover:duration-400 sm:mb-3 md:mr-14 rounded-2xl border-orange-400  pr-2 pl-5 pb-2 hover:bg-orange-500 hover:text-white '>
          <p className='text-4xl'><span><CountUp end={100} /></span> <span className='text-6xl'>+</span></p>
          <p className='text-2xl'>delivery boy</p>
        </div>
      </div>
      {/* <div className='mt-6'>
        <h3 className='font-extrabold text-4xl'>Delivering Delightful Moments to Your Doorstep</h3>
        <p className='mt-4 text-2xl'>At Hungry Bunny, we are passionate about connecting you with delicious food from your favorite local restaurants, right to your doorstep. Our mission is to make your dining experience as convenient and enjoyable as possible.</p>
        <p className='mt-4'>With a wide selection of cuisines and dishes to choose from, we cater to all tastes and preferences. Whether you &lsquo;re craving a classic comfort meal, exploring exotic flavors, or looking for healthy options, we have something for everyone.</p>
        <p className='mt-4'>Our platform brings together a network of trusted restaurants and culinary artisans who take pride in crafting delectable dishes using the finest ingredients. We believe in supporting local businesses and contributing to the communities we serve.</p>
      </div> */}
      {/* hero section delivery */}
      <div className='mt-7 md:flex mb-4'>
        <div className='md:w-[50%] sm:my-4'>
          <img style={{ height: 400 }} className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_uitPbsEfGbBqLS5mxLSulZnM87EpUl3X6VKkgrw1Eik3yAzDDuypT4hrbRE1QXqGH8&usqp=CAU" alt="" />
        </div>
        <div className='mt-6 md:w-[50%] sm:my-4'>
          <h3 className='font-extrabold text-4xl'>Delivering Flavorful Moments to Your Doorstep</h3>
          <p className='mt-4 text-2xl'>Our dedicated team works tirelessly to ensure that your orders are delivered promptly and with utmost care. From sizzling pizzas to savory noodles, indulgent desserts to health-conscious choices, our diverse range of restaurant partners offers something for every palate</p>
          <button className="drop-shadow-lg hover:transition hover:duration-400 border-orange-500 hover:text-orange-500 hover:bg-white mt-8 text-white bg-orange-500 border-2 font-bold py-2 px-4 rounded-full flex items-center">
            Our Dedicated team
          </button>
        </div>
      </div>

      {/* add new section */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-10 mb-10'>
        <div className='p-7 bg-white hover:transition hover:duration-400 rounded-3xl drop-shadow-lg hover:text-white hover:bg-orange-500 dark:bg-black dark:text-white dark:border-2 dark:border-orange-500 dark:hover:bg-orange-500 hover:'>
          <p className='text-7xl ml-3'><PiVanDuotone /> </p>
          <h3 className='text-4xl font-bold'>Free Delivery</h3>
          <p className='mt-4 mb-4'>Enjoy the added perk of FREE delivery! Savor your favorite dishes without the extra cost, making every meal a delightful and budget-friendly experience.</p>
        </div>
        <div className='p-7 bg-white hover:transition hover:duration-400 rounded-3xl drop-shadow-lg hover:text-white hover:bg-orange-500 dark:bg-black dark:text-white dark:border-2 dark:border-orange-500 dark:hover:bg-orange-500'>
          <p className='text-7xl ml-3 hover:text-white'><BsStopwatch /> </p>
          <h3 className='text-4xl font-bold'>Save your Time</h3>
          <p className='mt-4 mb-4'>Save time with our swift food delivery service. Spend less time in the kitchen and more time enjoying your meals, all with just a few clicks.</p>
        </div>
        <div className='p-7 bg-white hover:transition hover:duration-400 rounded-3xl drop-shadow-lg hover:text-white hover:bg-orange-500 dark:bg-black dark:text-white dark:border-2 dark:border-orange-500 dark:hover:bg-orange-500'>
          <p className='text-7xl ml-3 hover:text-white'><MdOutlineLocalOffer /> </p>
          <h3 className='text-4xl font-bold'>Regular Discount</h3>
          <p className='mt-4 mb-4'>Unlock regular discounts for loyal customers. Enjoy savings on your favorite dishes with our exclusive offers, making dining with us even more satisfying.</p>
        </div>
        <div className='p-7 bg-white hover:transition hover:duration-400 rounded-3xl drop-shadow-lg hover:text-white hover:bg-orange-500 dark:bg-black dark:text-white dark:border-2 dark:border-orange-500 dark:hover:bg-orange-500'>
          <p className='text-7xl ml-3 hover:text-white'><PiBowlFood /> </p>
          <h3 className='text-4xl font-bold'>Variety Foods</h3>
          <p className='mt-4 mb-4'>Explore a world of diverse flavors. Our menu boasts a variety of cuisines, promising an exciting dining adventure with every order.</p>
        </div>
      </div>

      {/* hero section partner */}
      <div className='mt-7 md:flex mb-4'>
        <div className='mt-6 md:w-[50%] mr-8 sm:my-4'>
          <h3 className='font-extrabold text-4xl'>Empowering Culinary Creativity, One Delivery at a Time</h3>
          <p className='mt-4 text-2xl'>Join our Your Food Delivery Partner Name family and embark on a journey that celebrates culinary excellence. As a trusted delivery partner, we bridge the gap between talented chefs and eager diners. From kitchen to doorstep, we ensure that every dish retains its essence and arrives with care. Discover a new dimension of flavors with Your Food Delivery Partner</p>
          <button className="drop-shadow-lg hover:transition hover:duration-400 border-orange-500 bg-orange-500 border-2 hover:text-orange-500 hover:bg-white mt-8 text-white font-bold py-2 px-4 rounded-full flex items-center">
            become a partner
          </button>
        </div>
        <div className='md:w-[50%] sm:my-4'>
          <img style={{ height: 400 }} className='rounded-lg' src="https://qph.cf2.quoracdn.net/main-qimg-a61ce6a2849c8c7cb1de96a6afee4870-lq" alt="" />
        </div>
      </div>
      {/* hero section add restaurant */}
      <div className='mt-7 md:flex mb-4'>
        <div className='md:w-[50%] sm:my-4'>
          <img style={{ height: 400 }} className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_g2ixsBMg5GAKY4BSGW6CPYsCTYeu15OEw&usqp=CAU" alt="" />
        </div>
        <div className='mt-6 md:w-[50%] sm:my-4'>
          <h3 className='font-extrabold text-4xl'>Where Culinary Creativity Meets Your Cravings</h3>
          <p className='mt-4 text-2xl'>Indulge in a symphony of flavors at FlavorFusion Delights, where every dish is a masterpiece crafted with passion and innovation. Our menu, an amalgamation of global cuisines, takes your taste buds on an unforgettable journey. From sizzling street food to elegantly curated fine dining experiences, we cater to your every craving. Discover the perfect fusion of tradition and modernity in every bite.</p>
          <button className="drop-shadow-lg hover:transition hover:duration-400 border-orange-500 bg-orange-500 border-2 hover:text-orange-500 hover:bg-white mt-8 text-white font-bold py-2 px-4 rounded-full flex items-center">
            add your restaurant
          </button>
        </div>
      </div>
      {/* hero section delivery man */}
      <div className='mt-7 md:flex mb-4'>
        <div className='mt-6 md:w-[50%] mr-8 sm:my-4'>
          <h3 className='font-extrabold text-4xl'>Delivering Delicious Moments, One Ride at a Time</h3>
          <p className='mt-4 text-2xl'>Join our dedicated team of food delivery riders and be the hero of every mealtime! At our service, we don&lsquo;t just deliver food; we deliver smiles, convenience, and the joy of sharing a hot meal. Whether it&lsquo;s a busy workday or a lazy weekend, our riders are always on the move, ensuring your favorite dishes reach your doorstep piping hot and right on time. </p>
          <button className="drop-shadow-lg hover:transition hover:duration-400 bg-orange-500 border-2 border-orange-500 hover:text-orange-500 hover:bg-white mt-8 text-white font-bold py-2 px-4 rounded-full flex items-center">
            become a rider
          </button>

        </div>
        <div className='md:w-[50%] sm:my-4'>
          <img style={{ height: 400 }} className='rounded-lg' src="https://images.pexels.com/photos/4392039/pexels-photo-4392039.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default About;
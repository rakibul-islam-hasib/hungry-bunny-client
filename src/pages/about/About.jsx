import React from 'react';
import picture from '../../assets/img/aboutPage.jpg';

const About = () => {
  return (
    <div className='mx-auto justify-center items-center ml-5'>
      <div className="md:relative">
        <img className='md:ml-24' src={picture} style={{ height: 600 }} alt="delivery picture" />
      </div>
      <h3 className='md:absolute top-36 text-orange-500 font-extrabold text-4xl'>Hungry Bunny</h3>
      <div className='mt-6 mb-10 flex text-center'>
        <div className='border-2 w-[20%] rounded-2xl mr-16 border-orange-400 pr-7 pl-7 pt-4 pb-4 hover:bg-orange-500 hover:text-white '>
          <p className='text-4xl'><span>5000</span> <span className='text-6xl'>+</span></p>
          <p className='text-2xl'>happy customer</p>
        </div>
        <div className='border-2 w-[20%] rounded-2xl mr-16 border-orange-400 pr-7 pl-7 pt-4 pb-4 hover:bg-orange-500 hover:text-white '>
          <p className='text-4xl'><span>24/7</span> <span className='text-6xl'></span></p>
          <p className='text-2xl'>service</p>
        </div>
        <div className='border-2 w-[20%] rounded-2xl mr-16 border-orange-400 pr-7 pl-7 pt-4 pb-4 hover:bg-orange-500 hover:text-white '>
          <p className='text-4xl'><span>50</span> <span className='text-6xl'>+</span></p>
          <p className='text-2xl'>restaurant</p>
        </div>
        <div className='border-2 w-[20%] rounded-2xl mr-16 border-orange-400 pr-7 pl-7 pt-4 pb-4 hover:bg-orange-500 hover:text-white '>
          <p className='text-4xl'><span>100</span> <span className='text-6xl'>+</span></p>
          <p className='text-2xl'>delivery boy</p>
        </div>
      </div>
      <div className='mt-6'>
        <h3 className='font-extrabold text-4xl'>Delivering Delightful Moments to Your Doorstep</h3>
        <p className='mt-4'>At Hungry Bunny, we are passionate about connecting you with delicious food from your favorite local restaurants, right to your doorstep. Our mission is to make your dining experience as convenient and enjoyable as possible.</p>
        <p className='mt-4'>With a wide selection of cuisines and dishes to choose from, we cater to all tastes and preferences. Whether you &lsquo;re craving a classic comfort meal, exploring exotic flavors, or looking for healthy options, we have something for everyone.</p>
        <p className='mt-4'>Our platform brings together a network of trusted restaurants and culinary artisans who take pride in crafting delectable dishes using the finest ingredients. We believe in supporting local businesses and contributing to the communities we serve.</p>
      </div>
      {/* hero section delivery */}
      <div className='mt-7 md:flex mb-4'>
        <div className='w-[50%]'>
          <img style={{ height: 400 }} className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_uitPbsEfGbBqLS5mxLSulZnM87EpUl3X6VKkgrw1Eik3yAzDDuypT4hrbRE1QXqGH8&usqp=CAU" alt="" />
        </div>
        <div className='mt-6 w-[50%]'>
          <h3 className='font-extrabold text-4xl'>Delivering Flavorful Moments to Your Doorstep</h3>
          <p className='mt-4'>Our dedicated team works tirelessly to ensure that your orders are delivered promptly and with utmost care. From sizzling pizzas to savory noodles, indulgent desserts to health-conscious choices, our diverse range of restaurant partners offers something for every palate</p>
          <button className="bg-orange-600 hover:bg-orange-700 mt-8 text-white font-bold py-2 px-4 rounded-full flex items-center">
            Our Dedicated team
          </button>
        </div>
      </div>
      {/* hero section partner */}
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
      {/* hero section add restaurant */}
      <div className='mt-7 md:flex mb-4'>
        <div className='w-[50%]'>
          <img style={{ height: 400 }} className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_g2ixsBMg5GAKY4BSGW6CPYsCTYeu15OEw&usqp=CAU" alt="" />
        </div>
        <div className='mt-6 w-[50%]'>
          <h3 className='font-extrabold text-4xl'>Where Culinary Creativity Meets Your Cravings</h3>
          <p className='mt-4'>Indulge in a symphony of flavors at FlavorFusion Delights, where every dish is a masterpiece crafted with passion and innovation. Our menu, an amalgamation of global cuisines, takes your taste buds on an unforgettable journey. From sizzling street food to elegantly curated fine dining experiences, we cater to your every craving. Discover the perfect fusion of tradition and modernity in every bite. Come, experience a world of tastes that redefine dining.</p>
          <button className="bg-orange-600 hover:bg-orange-700 mt-8 text-white font-bold py-2 px-4 rounded-full flex items-center">
            add your restaurant
          </button>
        </div>
      </div>
      {/* hero section delivery man */}
      <div className='mt-7 md:flex mb-4'>
        <div className='mt-6 w-[50%] mr-8'>
          <h3 className='font-extrabold text-4xl'>Delivering Delicious Moments, One Ride at a Time</h3>
          <p className='mt-4'>Join our dedicated team of food delivery riders and be the hero of every mealtime! At our service, we don&lsquo;t just deliver food; we deliver smiles, convenience, and the joy of sharing a hot meal. Whether it&lsquo;s a busy workday or a lazy weekend, our riders are always on the move, ensuring your favorite dishes reach your doorstep piping hot and right on time. Join us in spreading happiness, one delivery at a time. Join our rider fleet today and be a part of something deliciously rewarding!</p>
          <button className="bg-orange-600 hover:bg-orange-700 mt-8 text-white font-bold py-2 px-4 rounded-full flex items-center">
            become a rider
          </button>
        </div>
        <div className='w-[50%]'>
          <img style={{ height: 400 }} className='rounded-lg' src="https://images.pexels.com/photos/4392039/pexels-photo-4392039.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
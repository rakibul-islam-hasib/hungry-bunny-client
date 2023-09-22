import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './css/TopRestaurant.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useAxiosFetch from '../../../hooks/useAxiosFetch';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineLoading3Quarters } from 'react-icons/ai';


const TopRestaurant = () => {


  const axios = useAxiosFetch([])
  const [allRestaurants, setAllRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('/application/get/approved/6')
      .then(res => {
        setAllRestaurants(res.data)
        console.log(res.data)

      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <div className="h-[300px] flex justify-center items-center w-full">
    <AiOutlineLoading3Quarters className="text-5xl text-primary animate-spin" />
  </div>

  return (
    <div>
      <div className="text-center lg:w-[70%] w-full sm:w-[90%] md:w-[80%] mx-auto space-y-5 py-5">
        <h3 className="font-semibold text-4xl mx-auto uppercase">Our top {allRestaurants.length} restaurant</h3>
        <p className=''>Introducing our Top Restaurant collection, a fusion of exceptional food quality and flawless service. Explore unforgettable dining where flavors and experiences converge for an unparalleled gastronomic journey.</p>
      </div>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
          el: '.mySwiper .swiper-pagination'
        }}

        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper swiper-container"
      >

        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> */}
        <div>
          {allRestaurants.map(item => <SwiperSlide key={item._id}>




            <div className="pb-6 flex flex-wrap items-center justify-center">

              <div className="flex-shrink-0 m-6 relative overflow-hidden border border-red-400  rounded-lg max-w-xs shadow-lg">

                <div className="relative  px-2 flex items-center justify-center">
                  <Link to={`/restaurant/${item._id}`} >
                    <img className='h-60 rounded-lg transition duration-300 ease-in-out hover:scale-110 ' src={item.image} alt="" />
                  </Link>
                </div>
                <div className="relative text-black px-6 pb-6 mt-6">
                  <small className='flex items-center gap-2 poppins text-normal'>
                    <span className=''><FaMapMarkerAlt className='text-orange-500'></FaMapMarkerAlt></span>
                    <span className="block opacity-75 -mb-1">{item.location}</span>
                  </small>
                  <div className="flex justify-between">
                    <span className="block font-semibold text-xl">{item.restaurant_name}</span>
                    {/* <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span> */}
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>)
          }
        </div>
        {/* <div className="flex justify-center ">
          <div className="">
            <div className="swiper-pagination"></div>
          </div>
        </div> */}
        <div className="flex justify-center mt-4">
          <div className="">
            {/* <div className="flex">
              <AiOutlineArrowLeft className="swiper-pagination-arrow-prev" />
              <AiOutlineArrowRight className="swiper-pagination-arrow-next" />
            </div> */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </Swiper>
      {/* Pagination */}
    </div>
  );
};

export default TopRestaurant;


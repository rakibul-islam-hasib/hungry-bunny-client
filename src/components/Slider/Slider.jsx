import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './Slider.css';

import { EffectCards, Autoplay } from 'swiper/modules';


  

const Slider = () => {


    return (
        <div className='swiper-div'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider;




        
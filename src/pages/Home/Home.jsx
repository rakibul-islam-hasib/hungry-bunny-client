<<<<<<< HEAD
import React from 'react';
import Hero from './Elements/Hero';
import CheckoutBar from '../../components/cart/CheckoutBar';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <section>
            <Hero />
            <CheckoutBar />
            <Slider></Slider>
        </section>
    );
=======
import React from "react";
import Hero from "./Elements/Hero";
import CheckoutBar from "../../components/cart/CheckoutBar";
import PopularFood from "./Elements/PopularFood";
import Stacks from "./Elements/Stacks";
import FoodCard from "../Menu/FoodCard";
import TopRestaurant from "./Elements/TopRestaurant";

// import HomeBlog from "./Elements/HomeBlog";

const Home = () => {

  return (
    <section>
      <Hero />
      <TopRestaurant/>
      <FoodCard/>
      <PopularFood />
      <Stacks />
      <CheckoutBar />
    </section>
  );
>>>>>>> 247d35b4a87f8287565c1163919ab29461a20eae
};

export default Home;

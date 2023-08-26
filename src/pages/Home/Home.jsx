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
      <TopRestaurant />
      <FoodCard />
      <PopularFood />
      <Stacks />
      <CheckoutBar />
    </section>
  );
};

export default Home;

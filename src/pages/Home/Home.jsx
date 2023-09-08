import React from "react";
import Hero from "./Elements/Hero";
import CheckoutBar from "../../components/cart/CheckoutBar";
import PopularFood from "./Elements/PopularFood";
import Stacks from "./Elements/Stacks";
import FoodCard from "../Menu/FoodCard";
import TopRestaurant from "./Elements/TopRestaurant";
import ChatBox from "../../functionality/chat/ChatBox";
import HowWeWork from "./Elements/HowWeWork";
import ScrollSlider from "./Elements/ScrollSlider";

// import HomeBlog from "./Elements/HomeBlog";

const Home = () => {

  return (
    <section id="home">
      <Hero />
      <TopRestaurant />
      <FoodCard />
      <PopularFood />
      {/* <Stacks /> */}
      {/* <Premium /> */}
      <ScrollSlider />
      <HowWeWork />
      <ChatBox />
      <CheckoutBar />
    </section>
  );
};

export default Home;

import React from "react";
import Hero from "./Elements/Hero";
import CheckoutBar from "../../components/cart/CheckoutBar";
import Card from "../../components/Card/Card";
import PopularFood from "./Elements/PopularFood";
import Stacks from "./Elements/Stacks";
// import HomeBlog from "./Elements/HomeBlog";

const Home = () => {

  return (
    <section>
      <Hero />
      <Card />
      <PopularFood />
      <Stacks />
      <CheckoutBar />
    </section>
  );
};

export default Home;

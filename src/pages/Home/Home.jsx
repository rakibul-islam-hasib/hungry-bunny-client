import React from "react";
import Hero from "./Elements/Hero";
import CheckoutBar from "../../components/cart/CheckoutBar";
import Card from "../../components/Card/Card";
import PopularFood from "./Elements/PopularFood";
import HomeBlog from "./Elements/HomeBlog";

const Home = () => {
  return (
    <section>
      <Hero />
      <Card />
      <PopularFood />
      <HomeBlog/>
      <CheckoutBar />
    </section>
  );
};

export default Home;

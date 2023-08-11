import React from "react";
import Hero from "./Elements/Hero";
import CheckoutBar from "../../components/cart/CheckoutBar";
import Card from "../../components/Card/Card";
import PopularFood from "./Elements/PopularFood";

const Home = () => {
  return (
    <section>
      <Hero />
      <Card />
      <PopularFood />
      <CheckoutBar />
    </section>
  );
};

export default Home;

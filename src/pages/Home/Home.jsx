import React from "react";
import Hero from "./Elements/Hero";
import CheckoutBar from "../../components/cart/CheckoutBar";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <section>
      <Hero />
      <Card></Card>
      <CheckoutBar />
    </section>
  );
};

export default Home;

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
};

export default Home;
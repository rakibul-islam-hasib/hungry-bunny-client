import React from 'react';
import Hero from './Elements/Hero';
import CheckoutBar from '../../components/cart/CheckoutBar';
import PopularFood from './Elements/PopularFood';

const Home = () => {
    return (
        <section>
            <Hero />
            <PopularFood />
            <CheckoutBar />
        </section>
    );
};

export default Home;
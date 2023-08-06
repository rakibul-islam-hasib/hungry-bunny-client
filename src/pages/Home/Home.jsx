import React from 'react';
import Hero from './Elements/Hero';
import CheckoutBar from '../../components/cart/CheckoutBar';

const Home = () => {
    return (
        <section>
            <Hero />
            <CheckoutBar />
        </section>
    );
};

export default Home;
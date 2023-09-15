import React from 'react';
import { useFoodCart } from '../../hooks/userFoodCart';

const Checkout = () => {
    const [cart] = useFoodCart();
    return (
        <div>
            <h1>Checkout</h1>
        </div>
    );
};

export default Checkout;
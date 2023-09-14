import React from 'react';

const FoodCart = (cart) => {

    const { _id, food_name, category, description, restaurant_name, price, image } = cart


    return (
        <div className='flex'>
            <img src={image} alt="" />
            <div>
            <h1>{food_name}</h1>

            </div>
        </div>
    );
};

export default FoodCart;
import React from 'react';

const AllFoodCard = ({item}) => {
    const {name, image, price} = item;
    return (
        <div>
            <img src={image} alt="" />
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default AllFoodCard;
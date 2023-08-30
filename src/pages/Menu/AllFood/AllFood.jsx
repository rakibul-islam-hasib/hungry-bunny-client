import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllFoodCard from './AllFoodCard';

const AllFood = () => {
    const [menu, setMenu] = useState([]);
    useEffect( () => {
        fetch('allFood.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    }, [])

    return (
        <div>
           {
            menu.map(item=> <AllFoodCard
            key={item.id}
            item={item}
            ></AllFoodCard>)
           } 
        </div>
    );
};

export default AllFood;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AllFood = () => {
    const [menu, setMenu] = useState([]);
    useEffect( () => {
        fetch('allFood.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default AllFood;
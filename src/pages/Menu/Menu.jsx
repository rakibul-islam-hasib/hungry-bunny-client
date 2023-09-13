import React, { useState } from 'react';
import MenuCard from '../../components/Card/MenuCard';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Menu = () => {
    const axios = useAxiosFetch();
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState([]);


    if (loading) return <div className="h-screen w-full flex justify-center items-center">
        <AiOutlineLoading3Quarters className='text-5xl text-primary animate-spin' />
    </div>

    return (
        <div>
            <h1>Menu Page</h1>
        </div>
    );
};

export default Menu;
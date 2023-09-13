import React, { useEffect, useState } from 'react';
import MenuCard from '../../components/Card/MenuCard';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Menu = () => {
    const axios = useAxiosFetch();
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        axios.get('/food/get/all')
        .then((res)=>{
            setMenu(res.data);
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            setLoading(false);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if (loading) return <div className="h-screen w-full flex justify-center items-center">
        <AiOutlineLoading3Quarters className='text-5xl text-primary animate-spin' />
    </div>

    return (
        <div>
        </div>
    );
};

export default Menu;
import React, { useEffect, useState } from 'react';
import MenuCard from '../../components/Card/MenuCard';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import FoodCard from '../../components/Card/FoodCard';
import { ToastContainer } from 'react-toastify';

const Menu = () => {
    const axios = useAxiosFetch();
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get('/food/get/all')
            .then((res) => {
                setMenu(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) return <div className="h-screen w-full flex justify-center items-center">
        <AiOutlineLoading3Quarters className='text-5xl text-primary animate-spin' />
    </div>

    return (
        <div className='w-[80%] mx-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {
                    menu.map((item) => <FoodCard key={item._id} product={item} />)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Menu;
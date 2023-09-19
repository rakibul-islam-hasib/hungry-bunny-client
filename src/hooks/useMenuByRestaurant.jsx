import React from 'react';
import useAxiosFetch from './useAxiosFetch';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from './useAuth';

const useMenuByRestaurant = () => {
    const axios = useAxiosFetch();
    const { user } = useAuth();
    console.log(user);
    const { data: menu, isLoading, refetch } = useQuery({
        queryKey: ['restaurant-menu'],
        queryFn: async () => {
            const res = await axios.get(`/food/${user?.email}`);
            // const res = await axios.get('/food');
            return res.data;
        }
    })
    return [menu, isLoading, refetch]
};

export default useMenuByRestaurant;
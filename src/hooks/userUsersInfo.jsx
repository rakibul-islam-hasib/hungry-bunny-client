import { useEffect, useState } from "react";
import useAxiosFetch from "./useAxiosFetch";
import { useQuery } from "@tanstack/react-query";




export const useUsersInfo = () => {
    const axios = useAxiosFetch();
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['user-info'],
        queryFn: async () => {
            const res = await axios.get('/user-info');
            return res.data;
        }
    })
    return [users, isLoading, refetch]
};
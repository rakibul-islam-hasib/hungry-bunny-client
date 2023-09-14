
import useAxiosFetch from "./useAxiosFetch";
import { useQuery } from "@tanstack/react-query";


export const useFoodCart = () => {
    const axios = useAxiosFetch();
    const { data: foodCart, isLoading, refetch } = useQuery({
        queryKey: ['user-info'],
        queryFn: async () => {
            const res = await axios.get('/foodCart');
            return res.data;
        }
    })
    return [foodCart, isLoading, refetch]
};
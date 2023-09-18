
import useAxiosFetch from "./useAxiosFetch";
import { useQuery } from "@tanstack/react-query";
import useUserSecure from "./useUserSecure";


export const useFoodCart = () => {
    const axios = useAxiosFetch();
    const [user] = useUserSecure();
    const { data: foodCart, isLoading, refetch } = useQuery({
        queryKey: ['cart-content'],
        queryFn: async () => {
            const res = await axios.get(`/cart/in-cart/${user._id}`);
            return res.data;
        },
        enabled: !!user,
    })
    return [foodCart, isLoading, refetch]
};
import { useQuery } from "@tanstack/react-query";
import useAxiosFetch from "../useAxiosFetch";

export const useCommunityPost = () => {
    const axios = useAxiosFetch();
    const { data: posts, isLoading, refetch } = useQuery({
        queryKey: ['community-post'],
        queryFn: async () => {
            const res = await axios.get('/community-post');
            return res.data;
        }
    })
    return [posts, isLoading, refetch]
};
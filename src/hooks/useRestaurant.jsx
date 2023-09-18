
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useUserSecure from './useUserSecure';
import useAxiosFetch from './useAxiosFetch';
const useRestaurant = (id) => {
    console.log(id)
    const axios = useAxiosFetch();
    const [user] = useUserSecure();
    const { data, isLoading } = useQuery({
        queryKey: ['restaurant'],
        queryFn: async () => {
            const { data } = await axios.get(`/application/get/${id}`);
            return data;
        },
        enabled: !!id,
    });
    return [data, isLoading];
}

export default useRestaurant;

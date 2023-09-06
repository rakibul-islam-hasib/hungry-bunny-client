/**
 * A custom React hook for fetching restaurant details from the server.
 *
 * @returns {Object} - An object with restaurant data.
 */
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useUserSecure from './useUserSecure';
const useRestaurant = () => {
    const axios = useAxiosSecure();
    const [user] = useUserSecure();
    const { data } = useQuery({
        queryKey: ['restaurant'],
        queryFn: async () => {
            const { data } = await axios.get(`/application/get/${user?._id}`);
            return data;
        }
    });
    return data;
}

export default useRestaurant;

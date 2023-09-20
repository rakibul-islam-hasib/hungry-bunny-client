import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "./useAuth";

/**
 * Custom hook to fetch user information securely using axios and react-query.
 * @param {string} email - The email of the user to fetch information for.
 * @returns {[Object, boolean, Function, boolean]} - An array containing the user information object, a boolean indicating if the data is currently being loaded, a function to refetch the data, and a boolean indicating if an error occurred while fetching the data.
 */

const useUserSecure = (email) => {
    const axios = useAxiosSecure();
    const { user } = useAuth();
    const { data, isLoading, isError, refetch } = useQuery(
        {
            queryKey: ["user", email],
            queryFn: async () => {
                const res = await axios.get(`/user-info/${user?.email}`);
                return res.data;
            },
            enabled: !!user?.email && !!localStorage.getItem('token'),
        }

    );
    return [data, isLoading, refetch, isError];
};

export default useUserSecure;

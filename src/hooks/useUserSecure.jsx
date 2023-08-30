import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "./useAuth";

const useUserSecure = (email) => {
    console.log(email, 'email')
    const axios = useAxiosSecure();
    const { user } = useAuth();
    const { data, isLoading, isError, refetch } = useQuery(
        {
            queryKey: ["user", email],
            queryFn: async () => {
                const res = await axios.get(`/user-info/${email}`);
                return res.data;
            },
            enabled: !!user?.email && !!email && !!localStorage.getItem('token'),
        }

    );
    console.log(data, 'data from useUserSecure')
    return [data, isLoading, refetch, isError];
};

export default useUserSecure;
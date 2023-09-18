import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "./useAuth";

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

import { useEffect, useState } from "react";
import useAxiosFetch from "./useAxiosFetch";
import { useQuery } from "@tanstack/react-query";

// const useAllUsers = () => {

//     const [users, setusers] = useState([]);
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//         fetch("https://hungry-bunny.vercel.app/user-info")
//             .then((res) => res.json())
//             .then((data) => {
//                 setusers(data);
//                 setLoading(false)
//             });
//     }, []);
//     return [users, loading]

// }

// export default useAllUsers;


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
import { useEffect, useState } from "react";
// import { useQuery } from "react-query";
import useAxiosFetch from "./useAxiosFetch";
import { useQuery } from "@tanstack/react-query";

const useUser = (email) => {
    const axios = useAxiosFetch();
    const { data, isLoading } = useQuery(
        {
            queryKey: ["user", email],
            queryFn: async () => {
                const res = await axios.get(`/user-info/${email}`);
                return res.data;
            },
            enabled: !!email,
        }
    );
    return [data, isLoading];
};

export default useUser;
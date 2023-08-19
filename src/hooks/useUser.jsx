import { useEffect, useState } from "react";
import useAxiosFetch from "./useAxiosFetch";

const useUser = (email) => {
    const axios = useAxiosFetch();
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user-info/${email}`);
            setData(res.data);
        }
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email])
    return data;
};
export default useUser;
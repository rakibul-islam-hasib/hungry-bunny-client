import { useEffect, useState } from "react";

const useAllUsers = () => {

    const [users, setusers] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("http://localhost:5000/user-info")
            .then((res) => res.json())
            .then((data) => {
                setusers(data);
                setLoading(false)
            });
    }, []);
    return [users, loading]

}

export default useAllUsers;
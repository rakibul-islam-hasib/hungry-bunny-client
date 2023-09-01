import { useEffect, useState } from 'react';

const useMenu = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('allMenu.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return [foods, setFoods]
}

export default useMenu

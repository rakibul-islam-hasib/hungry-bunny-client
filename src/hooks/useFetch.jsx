import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [foods])
    return [foods, setFoods]
}

export default useFetch

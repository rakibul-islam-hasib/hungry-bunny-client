import React from 'react';
import useUserSecure from '../hooks/useUserSecure';

const RestaurantRoute = ({ children }) => {
    const [user] = useUserSecure();
    if (user?.role !== 'restaurant') return <div>Access Denied</div>
    else return children;
};

export default RestaurantRoute;
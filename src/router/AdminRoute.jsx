import React from 'react';
import useUserSecure from '../hooks/useUserSecure';

const AdminRoute = ({ children }) => {
    const [user] = useUserSecure();
    if (user?.role !== 'admin') return <div>Access Denied</div>
    else return children;
};

export default AdminRoute;
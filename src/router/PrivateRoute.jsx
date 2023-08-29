import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    if (user) return children;
    return <Navigate to="/login" />;

};

export default PrivateRoute;

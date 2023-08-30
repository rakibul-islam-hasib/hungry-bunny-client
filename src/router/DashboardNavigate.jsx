import React from 'react';
import { Navigate } from 'react-router-dom';
import useUserSecure from '../hooks/useUserSecure';
import Loader from '../components/loader/Loader';

const DashboardNavigate = () => {
    const [currentUser, isLoading] = useUserSecure();
    console.log("🚀 ~ file: DashboardNavigate.jsx:7 ~ DashboardNavigate ~ isLoading:", isLoading)

    const role = currentUser?.role;


    if (isLoading) {
        return <Loader />;
    }

    if (role === "admin") return <Navigate to="/dashboard/admin-home" replace />;
    if (role === "instructor") return <Navigate to="/dashboard/instructor-cp" replace />;
    if (role === "user") return <Navigate to="/dashboard/student-cp" replace />;
};

export default DashboardNavigate;
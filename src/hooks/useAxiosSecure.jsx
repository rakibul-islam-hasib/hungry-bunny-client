import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/slices/authThunks';

const useAxiosSecure = () => {
    //  Base URL: https://hungry-bunny.vercel.app
    // Localhost: http://localhost:5000
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'https://hungry-bunny.vercel.app',
    });

    useEffect(() => {
        const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        const responseInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    dispatch(logoutUser());
                    navigate('/login');
                    throw error; // Rethrow the error to avoid processing the response further
                }
                throw error; // Rethrow other errors to maintain consistent error handling
            }
        );

        return () => {
            // Clean up interceptors when the component unmounts
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [navigate, axiosSecure, dispatch]);

    return axiosSecure;
};

export default useAxiosSecure;

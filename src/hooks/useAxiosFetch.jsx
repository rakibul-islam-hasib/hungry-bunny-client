import { useEffect } from 'react';
import axios from 'axios';

//  Base URL: https://hungry-bunny.vercel.app
// Localhost: http://localhost:5000/
const useAxiosFetch = () => {
    const axiosInstance = axios.create({
        baseURL: 'https://hungry-bunny.vercel.app', // TODO : Replace with base URL
    });

    useEffect(() => {
        const requestInterceptor = axiosInstance.interceptors.request.use((config) => {
            return config;
        });

        const responseInterceptor = axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => {
                throw error;
            }
        );

        return () => {
            // Clean up interceptors when the component unmounts
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(responseInterceptor);
        };
    }, [axiosInstance]);

    return axiosInstance;
};

export default useAxiosFetch;

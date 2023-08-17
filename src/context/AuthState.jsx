import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { app } from '../config/firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { setLoading, setUser } from '../redux/slices/authSlice';
import useAxiosFetch from '../hooks/useAxiosFetch';

export const AuthContext = createContext(null);
const AuthState = ({ children }) => {
    const auth = getAuth(app);
    const axios = useAxiosFetch();
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(true)
            if (currentUser) {
                dispatch(setUser(currentUser))
                if (currentUser.displayName) {

                    axios.post('/set-token', { email: currentUser.email, name: currentUser.displayName })
                        .then(data => {
                            // console.log(data.data.token)
                            if (data.data.token) {
                                localStorage.setItem('token', data.data.token);
                                setLoading(false);
                            }
                        })
                }
                else {
                    localStorage.removeItem('token');
                    setLoading(false);
                }
            }
            else {
                dispatch(setUser(null))
            }
            return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
        })
    }, [auth, axios, dispatch])
    return (
        <AuthContext.Provider value={null}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { app } from '../config/firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { setLoading, setUser } from '../redux/slices/authSlice';

export const AuthContext = createContext(null);
const AuthState = ({ children }) => {
    const auth = getAuth(app);
    // const { setLoading, setUser } = useAuth();
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(true)
            if (currentUser) {
                dispatch(setUser(currentUser))
            }
            else {
                dispatch(setUser(null))
            }
            return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
        })
    }, [auth, dispatch])
    return (
        <AuthContext.Provider value={null}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;
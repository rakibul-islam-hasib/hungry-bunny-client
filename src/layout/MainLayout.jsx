import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';
import Loader from '../components/loader/Loader';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../config/firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { setLoading, setUser } from '../redux/slices/authSlice';
import { useSelector } from 'react-redux';

const MainLayout = () => {
    const loader = false;
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.auth);
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

    if (loading) return <Loader />

    return (
        <>
            <main className=''>
                <NavBar />
                <div className="max-w-screen-xl mx-auto">
                    <Outlet />
                </div>
                <Footer />
            </main>
            <ScrollRestoration />
        </>
    );
};

export default MainLayout;
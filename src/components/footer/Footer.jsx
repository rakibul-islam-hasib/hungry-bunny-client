import React, { useEffect } from 'react';
import bgImg from '../../assets/img/footer_bg.jpg';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setFooter } from '../../redux/slices/utilsSlice';
import NewsLetter from './NewsLetter';
import MainFooter from './Elements/MainFooter';
const Footer = () => {
    const dispatch = useDispatch();

    const { ref, inView } = useInView({
        triggerOnce: false, // Only trigger once when the component comes into view
    });

    useEffect(() => {
        if (inView) {
            dispatch(setFooter(true))
        }
        else {
            dispatch(setFooter(false))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);


    return (

        <>
            <footer ref={ref}>
                <NewsLetter />
                <MainFooter />
            </footer>
        </>
    );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import photo from "../assets/img/errorPhoto.png"
import { Button } from '@mui/material';

const Error404 = () => {
    return (
        <div className='flex ml-60'>
            <div className='ml-8 pt-56 text-3xl'>
                <h1>OOPS..!!! </h1>
                <h2>Page not found</h2>
                <Link to='/'> <Button className=''>Back to Home</Button></Link>
            </div>
            <div>
                <img className='mx-auto h-[600px]' src={photo} alt="" />
            </div>
        </div>
    );
};

export default Error404;





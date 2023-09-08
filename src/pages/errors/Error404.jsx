import React from 'react';
import { Link } from 'react-router-dom';
import photo from "../../assets/img/errorPhoto.png"
import { Button } from '@mui/material';

const Error404 = () => {
    return (
        <div className='flex flex-col-reverse md:flex md:flex-row'>
            <div className='mx-auto text-xl md:pt-52 md:text-3xl md:ml-72'>
                <h1>OOPS..!!! </h1>
                <h2>Page not found</h2>
                <Link to='/'> <Button className=''>Back to Home</Button></Link>
            </div>
            <div>
                <img className='mx-auto h-[250px] md:h-[550px] md:mr-44' src={photo} alt="" />
            </div>
        </div>
    );
};

export default Error404;





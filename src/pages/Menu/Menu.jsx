import React from 'react';
import MenuCard from '../../components/Card/MenuCard';
import { Helmet } from 'react-helmet-async';

const Menu = () => {
    

    return (
        <div className=''>
           <Helmet>
        <title>Hungry Bunny || all menu</title>
      </Helmet>

            <MenuCard/>

        </div>
    );
};

export default Menu;
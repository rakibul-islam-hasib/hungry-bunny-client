import React from 'react';
import MenuCard from '../../components/Card/MenuCard';
import { useTitle } from '../../hooks/useTitle';

const Menu = () => {

    useTitle('Menu');

    return (
        <div className=''>

            <MenuCard />

        </div>
    );
};

export default Menu;
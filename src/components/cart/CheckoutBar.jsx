import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrSubtract, GrClose } from 'react-icons/gr';

const CheckoutBar = ({ visibleLeft, setVisibleLeft }) => {
    return (
        <Sidebar visible={visibleLeft} className='bg-white px-3 py-6' position="right" onHide={() => setVisibleLeft(false)}>
            <div className="">
                <h1>Hello</h1>
            </div>
        </Sidebar>

    );
};

export default CheckoutBar;
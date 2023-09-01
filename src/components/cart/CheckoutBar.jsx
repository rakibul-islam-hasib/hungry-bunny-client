import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrSubtract } from 'react-icons/gr';

const CheckoutBar = ({ visibleLeft, setVisibleLeft }) => {
    return (
        <Sidebar visible={visibleLeft} className='bg-white px-3 py-6' position="right" onHide={() => setVisibleLeft(false)}>
            <h2 className='text-center text-4xl font-bold'>your order: length</h2>
            {/* restaurant info */}
            <div className='flex mb-7'>
                <img style={{width:70}} className='mr-6' src="https://media.istockphoto.com/id/1420741132/photo/creative-abstract-question-mark-hologram-and-hands-typing-on-computer-keyboard-on-background.webp?b=1&s=170667a&w=0&k=20&c=JB6QvrvooQHHUoF1c9Yl2XkGBeZfWr3uirUXt7isW4M=" alt="restaurant logo" />
                <h2 className='text-center text-2xl font-bold'>restaurant name</h2>
            </div>
            {/* food info */}
            <div className='flex'>
            <img style={{width:70}} className='mr-6' src="https://media.istockphoto.com/id/1420741132/photo/creative-abstract-question-mark-hologram-and-hands-typing-on-computer-keyboard-on-background.webp?b=1&s=170667a&w=0&k=20&c=JB6QvrvooQHHUoF1c9Yl2XkGBeZfWr3uirUXt7isW4M=" alt="restaurant logo" />
            <h2 className='text-center text-2xl font-bold'>food name</h2>
            <h2 className='text-center text-4xl font-bold'>$ price</h2>
            </div>
            <div className='flex justify-evenly gap-x-6 mt-5'>
                <p className='text-2xl'>quantity</p>
                <GrSubtract className='text-6xl outline-offset-8 outline-orange-400 p-2'/>
                <p>length</p>
                <AiOutlinePlus/>
               
            </div>
                <div>
                <p>total</p>
                <p>$ price</p>
                </div>
        </Sidebar>

    );
};

export default CheckoutBar;
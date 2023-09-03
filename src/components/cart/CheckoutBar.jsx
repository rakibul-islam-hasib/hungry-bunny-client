import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrSubtract, GrClose } from 'react-icons/gr';

const CheckoutBar = ({ visibleLeft, setVisibleLeft }) => {
    return (
        <Sidebar visible={visibleLeft} className='bg-white px-3 py-6' position="right" onHide={() => setVisibleLeft(false)}>
            <h2 className='text-center text-4xl font-bold mt-6 '>your order: <span className='text-orange-500'>0</span></h2>
            <hr className='w-full ' />
            {/* restaurant info */}
            <div className='flex mb-7 mt-4 '>
                <img style={{width:70}} className='mr-6' src="https://media.istockphoto.com/id/1420741132/photo/creative-abstract-question-mark-hologram-and-hands-typing-on-computer-keyboard-on-background.webp?b=1&s=170667a&w=0&k=20&c=JB6QvrvooQHHUoF1c9Yl2XkGBeZfWr3uirUXt7isW4M=" alt="restaurant logo" />
                <h2 className='text-center text-2xl font-bold'>restaurant name</h2>
            </div>
            {/* food info */}
            <div className='flex justify-evenly'>
            <img style={{width:70}} className='mr-6' src="https://media.istockphoto.com/id/1420741132/photo/creative-abstract-question-mark-hologram-and-hands-typing-on-computer-keyboard-on-background.webp?b=1&s=170667a&w=0&k=20&c=JB6QvrvooQHHUoF1c9Yl2XkGBeZfWr3uirUXt7isW4M=" alt="food image" />
            <h2 className='text-center text-2xl font-bold'>food name</h2>
            <p className='text-center text-2xl font-bold'><GrClose/> </p>
            </div>
            <div className='flex justify-between items-center gap-x-6 mt-5'>
                <p className='flex justify-between gap-x-5 text-4xl'><GrSubtract className='border-2 border-orange-500 rounded-xl p-2'/>
                <span>0</span>
                <AiOutlinePlus className='border-2 border-orange-500 rounded-xl'/></p>
               
            <h2 className='text-center text-5xl font-bold text-orange-500'>$ 20</h2>
            </div>
            <hr className='mt-4' />
                <div className='text-4xl ml-3 mt-2 flex justify-between font-bold'>
                <p>total price</p>
                <p className='text-orange-500 text-5xl'>$ 20</p>
                </div>
        </Sidebar>

    );
};

export default CheckoutBar;
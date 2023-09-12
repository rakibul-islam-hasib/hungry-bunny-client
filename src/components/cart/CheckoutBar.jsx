import React, { useEffect } from 'react';
import gsap from 'gsap';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import useUtils from '../../hooks/useUtils';
import { useDispatch } from 'react-redux';
import { setCheckoutOpen } from '../../redux/slices/utilsSlice';

const CheckoutBar = () => {
  const { isCheckoutOpen } = useUtils();
  const dispatch = useDispatch();
  const openCheckoutBar = () => {
    const t1 = gsap.timeline();
    t1.to('#checkout-bar', {
      duration: 0.5,
      right: 0,
      ease: 'power4.out',
    });
  };

  const closeCheckoutBar = () => {
    const t1 = gsap.timeline();
    t1.to('#checkout-bar', {
      duration: 0.5,
      right: '-350px',
      ease: 'power4.out',
    });
  };

  useEffect(() => {
    if (isCheckoutOpen) {
      openCheckoutBar();
    } else {
      closeCheckoutBar();
    }
  }, [isCheckoutOpen]);


  return (
    <div
      id='checkout-bar'
      className='h-screen flex flex-col   fixed top-0 -right-[350px] z-[100] w-[350px] bg-white'>
      {/* Top */}
      <div className="bg-primary w-full pr-3 py-2 flex justify-center relative items-center">
        <div className="">
          <h1 className="text-white text-xl font-semibold text-center">Checkout</h1>
        </div>
        <button onClick={() => dispatch(setCheckoutOpen(false))} className='absolute right-3'>
          <AiOutlineCloseSquare className='text-3xl text-white ' />
        </button>
      </div>

      <div className="body flex-1">
        <h1>Hello</h1>
      </div>



      {/* Bottom */}




      <div className="">
        <div className="flex items-center gap-1 bg-orange-50 py-2 w-full px-4">
          <input type="text" placeholder='Promo Code' className='py-1 px-2 rounded-md bg-gray-200 w-full' />
          <button className='font-bold bg-primary px-2 py-1 text-white rounded-md'>Apply</button>
        </div>
        
      

      </div>


    </div>
  );
};

export default CheckoutBar;
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const CheckoutBar = ({ visibleLeft, setVisibleLeft }) => {
  console.log(setVisibleLeft)
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
    if (visibleLeft) {
      openCheckoutBar();
    } else {
      closeCheckoutBar();
    }
  }, [visibleLeft]);


  return (
    <div
      id='checkout-bar'
      className='h-screen  fixed top-0 -right-[350px] z-[100] w-[350px] bg-white'>
      {/* Top */}
      <div className="">
        <button onClick={() => setVisibleLeft(false)}>
          <AiOutlineCloseSquare />
        </button>
      </div>
    </div>
  );
};

export default CheckoutBar;
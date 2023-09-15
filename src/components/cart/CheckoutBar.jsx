import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import useUtils from '../../hooks/useUtils';
import { useDispatch } from 'react-redux';
import { setCheckoutOpen } from '../../redux/slices/utilsSlice';
import { useFoodCart } from '../../hooks/userFoodCart';

const CheckoutBar = () => {
  const { isCheckoutOpen } = useUtils();
  const dispatch = useDispatch();

  const [cart = []] = useFoodCart();
  console.log(cart)

  const renderCount = useRef(0);

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
  console.log(renderCount)
  useEffect(() => {
    renderCount.current++;
    if (isCheckoutOpen) {
      openCheckoutBar();
    } else {
      closeCheckoutBar();
    }
  }, [isCheckoutOpen]);

  // if (isLoading) return <div>Loading...</div>;

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

      <div className='overflow-y-auto'>
        <div>

          {
            cart.map((item) => <div
              key={item._id}
              className="flex items-center gap-2 border-b py-2 px-4 duration-200 hover:bg-gray-100"
            >
              <div className="">
                <img className='w-[100px] h-[90px]' src={item.foodDetails.image} alt="" />
              </div>
              {/* Details */}
              <div className="">
                <h1 className="text-xl font-semibold">{item.foodDetails.food_name}</h1>
                <p className='text-primary text-xs'>Price : <span className='text-purple-700 font-bold'>{item.foodDetails.price}৳</span>
                  <span className='text-[14px] ml-2 text-gray-500'>x {item.quantity}</span>
                </p>
                <p className='text-red-500 font-bold'><span className='text-black font-normal'>Total</span> : {(item.foodDetails.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>)
          }

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-auto">
        <div className="flex items-center gap-1 my-2 bg-orange-50 py-2 w-full px-4">
          <input type="text" placeholder='Promo Code' className='py-1 px-2 rounded-md bg-gray-200 w-full' />
          <button className='font-bold bg-primary px-2 py-1 text-white rounded-md'>Apply</button>
        </div>
        <table className="float-right mr-4 border-collapse">
          <tbody>
            <tr>
              <td className="px-4">Discount</td>
              <td className="px-4 text-right">-$5.00</td>
            </tr>
            <tr>
              <td className="px-4">Subtotal</td>
              <td className="px-4 text-right">$25.00</td>
            </tr>
            <tr>
              <td className="px-4">Shipping Fee</td>
              <td className="px-4 text-right">$5.00</td>
            </tr>
            <tr>
              <td className="px-4 font-bold">Total</td>
              <td className="px-4 text-right font-bold">$30.00</td>
            </tr>
          </tbody>
        </table>

        <div className="">
          <button className='w-full bg-primary text-xl font-bold text-red-100 py-2'>
            Continue to Payment
          </button>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-2">
        Render count: {renderCount.current}
      </div>

    </div>
  );
};

export default CheckoutBar;
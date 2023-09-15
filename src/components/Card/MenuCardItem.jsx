import React, { useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';
import useUserSecure from '../../hooks/useUserSecure';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useFoodCart } from '../../hooks/userFoodCart';

const MenuCardItem = (menu) => {
  const { _id, food_name, category, description, restaurant_name, price, image } = menu

  const [loading, setLoading] = useState(false);
  const axios = useAxiosSecure();
  const [user] = useUserSecure();
  const [, , refetch] = useFoodCart();
  const cartHandler = (itemId, restaurant_id) => {
    if (!user) return toast.error('Please Login First');
    const data = {
      itemId,
      restaurant_id,
      userId: user._id,
      quantity: 1,
    }
    toast.promise(axios.post('/cart/new', data), {
      pending: 'Adding to cart...',
      success: 'Added to cart',
      error: 'Something went wrong'
    })
      .then((data) => {
        console.log(data.data)
        refetch();
      })
      .catch((err) => {
        console.log(err)
      })

  };

  return (
    <div>




      <div key={_id} className={` border px-3 py-2 overflow-hidden shadow-lg rounded-md ${_id === 1 ? 'w-full' : ''}`}>
        <div>

          <img className="w-full h-64 object-cover transition transform duration-200  hover:-translate-y-2 rounded-lg relative    peer  top-0 right-0" src={image} alt="Food Image" />

        </div>
        <div className=" py-4">
          <div className="font-semibold text-xl mb-2">{food_name}</div>
          <p className="text-sm text-gray-500">{description.slice(0, 70)}</p>
          <div className="flex items-center gap-2">
            <p>
              <span className="text-sm font-bold text-primary">{category}</span>
            </p>
            <p className='text-sm text-gray-400 font-bold'>By</p>
            <p className="text-sm font-bold text-slate-900">{restaurant_name}</p>
          </div>
          <div className="flex justify-between items-center  h-14">
            <span className="text-gray-600 font-semibold text-lg">{price} Taka</span>
            <button className=" ">
              <FaRegBookmark onClick={() => cartHandler(menu._id, menu.restaurant_id)} className="text-2xl transform transition duration-300 hover:scale-125" />

            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default MenuCardItem;
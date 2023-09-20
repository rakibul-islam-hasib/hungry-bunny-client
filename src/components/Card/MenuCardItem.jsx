import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useUserSecure from '../../hooks/useUserSecure';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useFoodCart } from '../../hooks/userFoodCart';
import { Box, Modal } from '@mui/material';
import { BsCartPlus } from 'react-icons/bs';
import cartSound from '../../assets/audio/cart-success.mp3';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const MenuCardItem = ({menu}) => {
  const { _id, food_name, category, description, restaurant_name, price, image } = menu
  const cartAudio = new Audio(cartSound);
  const axios = useAxiosSecure();
  const [user] = useUserSecure();
  const [, , refetch] = useFoodCart();
  const cartHandler = (itemId, restaurant_id) => {
    // return console.log(itemId, restaurant_id)
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
        if (data.data.insertedId) {
          cartAudio.play();
          refetch();
        }
      })
      .catch((err) => {
        console.log(err)
      })

  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>




      <div key={_id} className={` border px-3 py-2 overflow-hidden shadow-lg rounded-md ${_id === 1 ? 'w-full' : ''}`}>
        <div onClick={handleOpen}>

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
              <BsCartPlus onClick={() => cartHandler(menu._id, menu.restaurant_id)} className="text-2xl transform transition duration-300 hover:text-primary hover:scale-110" />

            </button>
          </div>
        </div>
      </div>


      <section>


        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 450, height: 450, border: 'none', borderRadius: '20px', }}>
            <img className="w-full mx-auto transform transition duration-300 hover:scale-105" src={image} alt="" />
            <div className='py-5'>
              {/* <h2 id="parent-modal-title " className='text-sm font-bold text-primary'>By {restaurant_name}</h2> */}
              <div className="flex items-center gap-2">
                <p>
                  <span className="text-sm font-bold text-primary">{category}</span>
                </p>
                <p >By</p>
                <p className="text-sm font-bold text-slate-900">{restaurant_name}</p>
              </div>
              <p id="parent-modal-description">
                description: {description}
              </p>
            </div>

            {/* <div>
                            <p>Ingredients</p>
                            <li className='text-thin'>{category}</li>
                            <li className='text-thin'>{}</li>
                        </div> */}
          </Box>
        </Modal>
      </section>


    </div>
  );
};

export default MenuCardItem;
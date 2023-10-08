import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useTitle } from '../../../hooks/useTitle';
import { Tab } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
const PendingMenu = () => {
  useTitle('Pending Menu Management');
  const axios = useAxiosSecure();

  const { data = [], isLoading, refetch } = useQuery({
    queryKey: ['pendingMenu'],
    queryFn: async () => {
      const { data } = await axios.get('/food/get/pending/r');
      return data;
    }
  })




  const handleApprove = id => {
    axios.put(`/food/update/${id}`, { status: 'approved' })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount === 1) {
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }



  if (isLoading) return <div className="h-screen flex justify-center items-center w-full">
    <AiOutlineLoading3Quarters className="text-5xl text-primary animate-spin" />
  </div>

  if (data.length === 0) return <div className="h-screen flex justify-center items-center w-full">
    <h1 className="text-2xl text-gray-500">No pending menu</h1>
  </div>


  return (
    <div>
      <h1>Pending Menu Management</h1>
      <div className="">
        {
          data.map((menu) => (
            <div key={menu._id} className="border-2 border-gray-200 rounded-md p-4 my-4 flex items-center">
              <div className="mr-4">
                <img src={menu.image} alt={menu.food_name} className="w-64 h-64 object-cover rounded-md" />
              </div>
              <div className="flex-1">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-500 hover:text-blue-700 transition duration-300">{menu.food_name}</h2>
                  <p className="text-gray-600 mt-2">{menu.description.slice(0, 60)}...</p>
                  <p>By <span className='font-bold text-primary'>{menu.restaurant[0].restaurant_name}</span></p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-500">Price: ${menu.price.toFixed(2)}</span>
                  <div className="flex items-center space-x-3">
                    <button onClick={() => handleApprove(menu._id)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">Approve</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">Reject</button>
                  </div>
                </div>
              </div>
            </div>


          ))
        }
      </div>

    </div>
  );
};

export default PendingMenu;
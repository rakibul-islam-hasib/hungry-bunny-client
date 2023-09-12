import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrSubtract, GrClose } from 'react-icons/gr';

const CheckoutBar = ({ visibleLeft, setVisibleLeft }) => {
    return (
        <Sidebar visible={visibleLeft} className='bg-white px-3 py-6' position="right" onHide={() => setVisibleLeft(false)}>
          <Sidebar visible={visibleLeft} className='bg-white px-3 py-6' position="right" onHide={() => setVisibleLeft(false)}>
         <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">Total item 5</h1>
      </div>
     
      <ul className="divide-y divide-gray-200 px-4">
        <li className="py-4">
          <div className="flex items-center">
            <input id="todo1" name="todo1" type="checkbox"
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label htmlFor="todo1" className="ml-3 block text-gray-900">
              <span className="text-lg font-medium">Chicken Burger</span>
              <span className="text-sm font-light text-gray-500 pl-4">3x</span>
            </label>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center">
            <input id="todo1" name="todo1" type="checkbox"
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label htmlFor="todo1" className="ml-3 block text-gray-900">
              <span className="text-lg font-medium">Chicken Burger</span>
              <span className="text-sm font-light text-gray-500 pl-4">3x</span>
            </label>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center">
            <input id="todo1" name="todo1" type="checkbox"
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label htmlFor="todo1" className="ml-3 block text-gray-900">
              <span className="text-lg font-medium">Chicken Burger</span>
              <span className="text-sm font-light text-gray-500 pl-4">3x</span>
            </label>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center">
            <input id="todo1" name="todo1" type="checkbox"
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label htmlFor="todo1" className="ml-3 block text-gray-900">
              <span className="text-lg font-medium">Chicken Burger</span>
              <span className="text-sm font-light text-gray-500 pl-4">3x</span>
            </label>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center">
            <input id="todo1" name="todo1" type="checkbox"
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label htmlFor="todo1" className="ml-3 block text-gray-900">
              <span className="text-lg font-medium">Chicken Burger</span>
              <span className="text-sm font-light text-gray-500 pl-4">3x</span>
            </label>
          </div>
        </li>
       
      </ul>
      <div className="flex gap-6">

   <a className="inline-block px-8 py-3 text-sm rounded-full font-medium text-white bg-primary border border-violet-600  active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring" href="/download">
     Checkout
   </a>
   
   <a className="inline-block px-8 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded-full hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
     Clear
   </a>

</div>
    </div>
        </Sidebar>
        </Sidebar>

    );
};

export default CheckoutBar;
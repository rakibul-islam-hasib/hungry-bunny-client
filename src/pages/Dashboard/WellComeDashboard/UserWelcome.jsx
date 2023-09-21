import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaPaypal, FaPhoneAlt, FaWallet, } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { MdFastfood } from 'react-icons/md';
import { useAuth } from '../../../hooks/useAuth';
import useUserSecure from '../../../hooks/useUserSecure';
import { Helmet } from 'react-helmet-async';

const UserWelcome = () => {

    const { user: firebaseUser } = useAuth()

    const foodOrders = [
        { id: 1, foodName: "Burger", orderNumber: 101 },
        { id: 2, foodName: "Pizza", orderNumber: 10 },
        { id: 3, foodName: "Pasta", orderNumber: 103 },
        { id: 4, foodName: "Sushi", orderNumber: 50 },
        { id: 5, foodName: "Salad", orderNumber: 90 },
        { id: 6, foodName: "Steak", orderNumber: 106 },
        { id: 7, foodName: "Tacos", orderNumber: 107 },
        { id: 8, foodName: "Ice Cream", orderNumber: 108 },
        { id: 9, foodName: "Fried Chicken", orderNumber: 20 },
        { id: 10, foodName: "Sushi Rolls", orderNumber: 110 },
      ];
      

      
    const [user] = useUserSecure()
    // console.log(firebaseUser)
    // console.log(user)
    return (
        <div className="mr-10">
            <Helmet>
        <title>Hungry Bunny || dashboard || user</title>
      </Helmet>
            <div className='pt-8 pb-2 flex justify-between items-center'>
                <div className='w-96'>
                <form className='mt-10'>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 pl-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
          placeholder="Search blogs "
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-black duration-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Search
        </button>
      </div>
    </form>
                </div>
            <div className='flex items-center -mb-5'>
            <h1 className='text-4xl -mb-4 font-bold text-orange-400 mr-6'>Welcome {firebaseUser?.displayName}</h1>
            <img className='w-20 rounded-full' src="https://images.generated.photos/P2tzhpRdA_aiFi3kf2sPjw-vYJXi7hQE349GFBGi2ds/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY4MjM4LmpwZw.jpg" alt="user image" />
            </div>
            </div>
      <hr className="w-full h-1 mx-auto my-2 bg-black border-0 rounded dark:bg-gray-700"></hr>

            <div className='mt-8 gap-x-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className='text-center bg-cyan-500 text-white p-5 rounded-md drop-shadow-lg flex justify-between items-center'>
        <div>
        <p className='text-4xl font-bold flex'>  <span className='font-extrabold'><TbCurrencyTaka/> </span> <span>22540.00</span></p>
        <p className='text-gray-800 text-2xl'>your total cost</p>
        </div>
        <div className='text-6xl'><FaWallet/> </div>
        </div>
        <div className='text-center bg-purple-500 text-white p-5 rounded-md drop-shadow-lg flex justify-between items-center'>
        <div>
        <p className='text-4xl font-bold text-left'>  05</p>
        <p className='text-gray-800 text-1xl'>number of payments</p>
        </div>
        <div className='text-6xl'><FaPaypal/>  </div>
        </div>
        <div className='text-center bg-pink-500 text-white p-5 rounded-md drop-shadow-lg flex justify-between items-center'>
        <div>
        <p className='text-4xl font-bold text-left'>  100</p>
        <p className='text-gray-800 text-1xl'>number of ordered foods</p>
        </div>
        <div className='text-6xl'><MdFastfood/> </div>
        </div>
        <div className='text-center bg-yellow-500 text-white p-5 rounded-md drop-shadow-lg flex justify-between items-center'>
        <div>
        <p className='text-4xl font-bold text-left'>  03</p>
        <p className='text-gray-800 text-2xl'>total contact</p>
        </div>
        <div className='text-6xl'><FaPhoneAlt/> </div>
        </div>
        
    
        {/* <div className='text-center bg-white p-5 rounded-md drop-shadow-lg'>
        <p className='text-4xl font-bold flex justify-evenly'> <span className='text-black'>00</span> <span><FaPhoneAlt/> </span> </p>
        <p className='text-gray-800'>your total contact</p>
        </div> */}
            </div>
       <div className='bg-white mt-10 '>
        <h2 className='text-gray-600 font-bold ml-10 pt-10 pb-7 text-3xl drop-shadow-3xl font-sans'>your food ordered individual number</h2>
       <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <AreaChart
            data={foodOrders}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="foodName"/>
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="orderNumber" stroke="#8884d8" fill="#5E5A80" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
       </div>
       <div className='mt-10 bg-white'>
        <h2 className='text-gray-600 font-bold ml-10 pt-10 pb-7 text-3xl drop-shadow-3xl font-sans'>your recent orders</h2>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <div className="inline-block min-w-full overflow-hidden">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 text-2xl md:text-4xl">
                #
              </th>
              <th scope="col" className="hidden sm:table-cell px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
                Product image
              </th>
              <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
                Product Name
              </th>
              <th scope="col" className="hidden sm:table-cell px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
                Status
              </th>
              <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-1/6 px-2 py-2 sm:px-4 sm:py-3 md:py-4">Number</td>
              <td className="hidden sm:table-cell w-1/6 px-2 py-2 sm:px-4 sm:py-3 md:py-4">
                <img
                  className="rounded-lg"
                  style={{ maxWidth: '90px' }}
                  src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="food image"
                />
              </td>
              <td className="w-1/6 px-2 py-2 sm:px-4 sm:py-3 md:py-4">Pizza</td>
              <td className="hidden sm:table-cell w-1/6 px-2 py-2 sm:px-4 sm:py-3 md:py-4">Pending</td>
              <td className="w-1/6 px-2 py-2 sm:px-4 sm:py-3 md:py-4">$2999</td>
            </tr>
            {/* Add more table rows here */}
          </tbody>
        </table>
      </div>
    </div>
       </div>
        </div>
    );
};

export default UserWelcome;
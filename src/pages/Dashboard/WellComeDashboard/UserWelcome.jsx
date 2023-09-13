import React from 'react';
import { FaPaypal, FaPhoneAlt, FaWallet } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { useAuth } from '../../../hooks/useAuth';
import useUserSecure from '../../../hooks/useUserSecure';
const UserWelcome = () => {

    const { user: firebaseUser } = useAuth()

    const [user] = useUserSecure()
    // console.log(firebaseUser)
    // console.log(user)
    return (
        <div className="mr-10">
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
            <div className='flex items-center'>
            <h1 className='text-4xl font-bold text-orange-400 mr-6'>Welcome , {firebaseUser?.displayName}</h1>
            <img className='w-20 rounded-full' src="https://images.generated.photos/P2tzhpRdA_aiFi3kf2sPjw-vYJXi7hQE349GFBGi2ds/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY4MjM4LmpwZw.jpg" alt="user image" />
            </div>
            </div>
      <hr className="w-full h-1 mx-auto my-2 bg-black border-0 rounded dark:bg-gray-700"></hr>

            <div className='mt-8 gap-x-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className='text-center bg-white p-5 rounded-md'>
        <p className='text-4xl font-bold flex justify-evenly'> <span className='text-black'> $ 00.00</span> <span><FaWallet/>  </span> </p>
        <p className='text-gray-800'>your total cost</p>
        </div>
        <div className='text-center bg-white p-5 rounded-md'>
        <p className='text-4xl font-bold flex justify-evenly'> <span className='text-black'> 00</span> <span><FaPaypal/>  </span> </p>
        <p className='text-gray-800'>number of payments</p>
        </div>
        <div className='text-center bg-white p-5 rounded-md'>
        <p className='text-4xl font-bold flex justify-evenly'> <span className='text-black'>00</span> <span><MdFastfood/>  </span> </p>
        <p className='text-gray-800'>number of ordered foods</p>
        </div>
        <div className='text-center bg-white p-5 rounded-md'>
        <p className='text-4xl font-bold flex justify-evenly'> <span className='text-black'>00</span> <span><FaPhoneAlt/> </span> </p>
        <p className='text-gray-800'>your total contact</p>
        </div>
            </div>
        </div>
    );
};

export default UserWelcome;
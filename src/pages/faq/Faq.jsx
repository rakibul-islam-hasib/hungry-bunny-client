import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import { Pagination } from '@mui/material';
import { ScrollRestoration } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Faq = () => {
    const [ allQuestions, setAllQuestions ] = useState([])
    const [page, setPage] = useState(1);

    // console.log(page)
    const [totalItem, setTotalItem] = useState(1);
    const totalPage = Math.ceil(totalItem / 20);
    const axios = useAxiosFetch();
    console.log(totalItem)
  
    useEffect(() => {
      axios.get('/faq/total/count')
        .then(res => setTotalItem(res.data.total))
        .catch(err => console.log(err))
  
      axios.get(`/faq?limit=20&page=${page}`)
        .then(res => setAllQuestions(res.data))
        .catch(err => console.log(err))
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])
    
    
    return (
        <div className='mb-10 dark:text-slate-200 font-sans ml-4'>
          <Helmet>
        <title>Hungry Bunny || faq</title>
      </Helmet>
      <img className='w-full mb-10' style={{height:400}} src="https://media.istockphoto.com/id/1349998432/photo/3d-render-of-faqs-business-concept.jpg?s=612x612&w=0&k=20&c=qhvy7I8jjnyAagxavLXVwSsvbsErceBVyIqF2eyHxWw=" alt="" />
      <form className='m-10 w-1/2 mx-auto'>
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
            {/* <h2 className='text-4xl text-orange-500 p-7 text-center font-extrabold'>Frequently Asked Questions</h2> */}
            <div className='md:flex'>
                <div className='md:w-[40%] pr-6'>
            <h2 className='text-4xl font-bold'>Every day help for our customers</h2>
            <p className='mt-5 mb-5 text-2xl'>
            Ask a Question for feature, you enable users to seek assistance and provide valuable feedback, which can lead to a better overall user experience on your food delivery platform.
            </p>
            <ul className='p-4 text-2xl'>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Managment</span></li>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Food Quality and Taste</span></li>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Special Requests</span></li>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Promotions and Discounts</span></li>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Menu Queries</span></li>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Account Assistance</span></li>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Promotions and Loyalty Programs</span></li>
            </ul>
            <div className="mb-16">
            <h2 className="font-bold text-4xl mt-10 mb-8 dark:text-slate-100">If you have any suggestions write here</h2>
            {/* <div className="flex justify-between">
           
        </div> */}
        <input type="text"  className='w-full my-6 rounded-3xl drop-shadow-lg pt-4 pb-4 text-2xl dark:text-black pl-5' placeholder='your name' />
        <input type="email"  className='w-full rounded-3xl drop-shadow-lg pt-4 pb-4  text-2xl dark:text-black pl-5' placeholder='your email' />
        <textarea name="" id="" cols="100" rows="5" className="rounded-3xl w-full mt-8 mb-5 drop-shadow-lg pt-4 pb-4  text-2xl dark:text-black pl-5" placeholder="write your comment"></textarea>
           <input type="submit" value="send" className="text-center hover:transition hover:duration-700 rounded-2xl drop-shadow-lg pt-1 pb-1 uppercase font-bold text-3xl bg-orange-500 w-full text-white border-2 border-orange-500 hover:text-orange-500 hover:bg-white" />
        </div>
                </div>
            <div className='md:w-[60%]'>
            {
                allQuestions.map((item) =>  
                <div key={item._id} className="card my-2">
                <details className='text-2xl font-bold'>
                    <summary className='hover:bg-orange-400 hover:transition hover:duration-700 hover:text-white drop-shadow-xl rounded-xl p-2'>{item.question}</summary>
                    <p className='my-3 p-3'>{item.answers}</p>
                </details>
            </div>
            )
            }
            </div>
            </div>
             {/* Pagination  */}
      <div className="mt-10 mb-5 text-right text-4xl mx-auto sm:w-[40%] md:w-[20%]">
        <Pagination className='text-right text-4xl font-bold pt-5 pb-5 pr-4 pl-4 rounded-2xl dark:bg-white' onChange={(e, vale) => setPage(vale)} count={totalPage} color="secondary" />
      </div>
      <ScrollRestoration />
        </div>
    );
};

export default Faq;
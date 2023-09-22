import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaReadme } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { Link, ScrollRestoration } from 'react-router-dom';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import Pagination from '@mui/material/Pagination';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  // console.log(page)
  const [totalItem, setTotalItem] = useState(1);
  const totalPage = Math.ceil(totalItem / 6);
  const axios = useAxiosFetch();
  useEffect(() => {
    axios.get('/blogs/total/count')
      .then(res => setTotalItem(res.data.total))
      .catch(err => console.log(err))

    axios.get(`/blogs?limit=6&page=${page}`)
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err))
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])
  // https://images.pexels.com/photos/5778895/pexels-photo-5778895.jpeg?auto=compress&cs=tinysrgb&w=1600
  return (
    <div className=''>
      <Helmet>
        <title>Hungry Bunny || blog</title>
      </Helmet>
      {/* <div className="w-full bg-[url('https://images.pexels.com/photos/5778892/pexels-photo-5778892.jpeg?auto=compress&cs=tinysrgb&w=600')]">
      </div> */}
      <div className='md:flex w-full p-5 rounded-2xl '>
        <div className='md:w-1/2 mt-10'>
          <h1 className='text-4xl text-slate-700 font-bold'>Exploring Global Flavors: A Culinary Journey from East to West</h1>
          <h1 className='text-2xl mt-6 font-sans'> Embark on a virtual voyage of taste as we uncover the rich tapestry of global cuisines, right at your doorstep. From the aromatic spices of Asia to the comforting classics of Europe and the bold flavors of the Americas.</h1>
          <form className='mt-10 w-[70%]'>
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
        <div className='md:w-1/2 mx-auto'>
          <img className='rounded-3xl  ml-10' style={{height:400}} src="https://media.istockphoto.com/id/1476897744/photo/closeup-of-business-woman-hand-typing-and-working-on-laptop-computer-searching-the.webp?b=1&s=612x612&w=0&k=20&c=5lrZN8DhZnCBqMkxZ6vyoRR6hlW7ht4IVTeTbr16G1o=" alt="" />
        </div>
      </div>
      <div>
      <div className="grid md:grid-cols-2 md:gap-8 gap-3 lg:grid-cols-3 mt-10 mx-auto">
        {blogs.map((item) => (
          <div key={item._id} className='p-2 border overflow-hidden shadow-lg rounded-2xl dark:drop-shadow-md'>
            <img className="w-full h-48 object-cover transition transform duration-200  hover:-translate-y-2 rounded-lg relative peer top-0 right-0" src={item.blogImage} alt="Food Image" />
            <div className='flex justify-between mt-3 dark:text-slate-200'>
              <p className='flex ml-2'> <span className='mr-2'><BiCalendar/> </span><span>{item.date}</span></p>
              <p className='flex items-center'><span className='mr-2'>{item.time} min read</span><span><FaReadme></FaReadme></span> </p>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
              <Link to={`/blogs/${item._id}`}> 
                <p className='dark:text-slate-200 duration-500 dark:hover:text-orange-400 hover:underline hover:text-orange-500'>{item.blogHeading}</p>
              </Link>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex'>
                  <div>
                    <img className='rounded-full mr-3' style={{ height: 40 }} src={item.authorImage} alt="" />
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-white text-base">{item.authorName}</p>
                    <p className="text-gray-700 dark:text-white text-base">{item.date}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Link to={`/blogs/${item._id}`}>
                  <button className="text-2xl mt-3 border-0 font-bold items-center mb-6 hover:underline text-orange-400 flex"><span>read more</span> <span className="ml-3"><FaArrowRight/> </span></button></Link>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination  */}
      <div className="mt-10 mb-5 text-right text-4xl mx-auto sm:w-[40%] md:w-[20%]">
        <Pagination className='text-right text-4xl font-bold pt-5 pb-5 pr-4 pl-4 rounded-2xl dark:bg-white' onChange={(e, vale) => setPage(vale)} count={totalPage} color="secondary" />
      </div>
      <ScrollRestoration />

      </div>
   
          
    </div>
  );
};

export default Blog;
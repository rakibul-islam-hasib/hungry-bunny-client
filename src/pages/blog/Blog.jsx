import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaReadme } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { Link, ScrollRestoration } from 'react-router-dom';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import Pagination from '@mui/material/Pagination';
import blog from '../../assets/img/blog.png'

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
      {/* <div className="w-full bg-[url('https://images.pexels.com/photos/5778892/pexels-photo-5778892.jpeg?auto=compress&cs=tinysrgb&w=600')]">
      </div> */}
      <div className='md:flex w-full bg-gradient-to-r from-orange-100 p-5 rounded-2xl '>
        <div className='md:w-1/2 mt-10'>
          <h1 className='text-4xl text-slate-700 font-bold'>Exploring Global Flavors: A Culinary Journey from East to West</h1>
          <h1 className='text-2xl mt-6 font-sans'> Embark on a virtual voyage of taste as we uncover the rich tapestry of global cuisines, right at your doorstep. From the aromatic spices of Asia to the comforting classics of Europe and the bold flavors of the Americas.</h1>
          <div className="flex items-center ml-12 mt-10 text-3xl">
      <input
        type="search"
        className="border rounded-3xl pt-4 pb-4 py-2 px-4  "
        placeholder="Search blogs"
      />
      <input type="submit" className='bg-orange-500 hover:transition hover:duration-400 border-2 border-orange-500 text-4xl text-white rounded-3xl pt-3 pb-3 px-4 py-2 ml-2 hover:bg-white font-bold hover:text-orange-500' value="search" />
    </div>
        </div>
        <div className='md:w-1/2 mx-auto'>
          <img className='bg-orange-400 rounded-3xl  ml-10' style={{height:400}} src={blog} alt="" />
        </div>
      </div>
      <div>
      <div className="grid md:grid-cols-2 md:gap-8 gap-3 lg:grid-cols-3 mt-10 mx-auto">
        {blogs.map((item) => (
          <div key={item._id} className='p-2 border overflow-hidden shadow-lg rounded-2xl dark:drop-shadow-md'>
            <img className="w-full h-48 object-cover rounded-lg" src={item.blogImage} alt="Food Image" />
            <div className='flex justify-between mt-3 dark:text-slate-200'>
              <p className='flex ml-2'> <span className='mr-2'><BiCalendar/> </span><span>{item.date}</span></p>
              <p className='flex items-center'><span className='mr-2'>{item.time} min read</span><span><FaReadme></FaReadme></span> </p>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <p className='dark:text-slate-200'>{item.blogHeading}</p>
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
                  <button className="text-2xl mt-3 border-0 font-bold items-center mb-6 text-orange-400 flex"><span>read more</span> <span className="ml-3"><FaArrowRight/> </span></button></Link>

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
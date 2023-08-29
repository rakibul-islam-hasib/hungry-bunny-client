import React, { useEffect, useState } from 'react';
import { FaReadme } from 'react-icons/fa';
import { Link, ScrollRestoration } from 'react-router-dom';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import Pagination from '@mui/material/Pagination';

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

  return (
    <div>
      <div className="grid md:grid-cols-2 md:gap-8 gap-3 lg:grid-cols-3 mt-10 mx-auto">
        {blogs.map((item) => (
          <div key={item._id} className='p-2 border overflow-hidden shadow-lg rounded-md'>
            <img className="w-full h-48 object-cover rounded-lg" src={item.blogImage} alt="Food Image" />
            <div className='flex justify-between mt-3'>
              <p>{item.date}</p>
              <p className='flex items-center'><span className='mr-2'>{item.time} min read</span><span><FaReadme></FaReadme></span> </p>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <p>{item.blogHeading}</p>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex'>
                  <div>
                    <img className='rounded-full mr-3' style={{ height: 40 }} src={item.authorImage} alt="" />
                  </div>
                  <div>
                    <p className="text-gray-700 text-base">{item.authorName}</p>
                    <p className="text-gray-700 text-base">{item.date}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Link to={`/blogs/${item._id}`}>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
                      Details
                    </button></Link>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination  */}
      <div className="mt-8 mb-8 text-right text-4xl">
        <Pagination className='text-right font-bold' onChange={(e, vale) => setPage(vale)} count={totalPage} color="secondary" />
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Blog;
import React, { useEffect, useState } from 'react';
import { FaReadme } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import './blog.css'

const Blog = () => {
  const axios = useAxiosFetch([])
    const [ blogs, setBlogs ] = useState([])
    const [loading, setLoading ] = useState(true)

    useEffect(() => {
      axios.get('/blogs')
      .then(res => {
       setBlogs(res.data)
      })
      .catch(error =>{
       console.log(error);
      })
      .finally(() => setLoading(false))
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   if(loading) return <div className ="restaurant-loader mx-auto">
   <div className ="circle"></div>
   <div className ="circle"></div>
   <div className ="circle"></div>
   <div className ="circle"></div>
 </div>
    return (
        <div>
          <div className='bg-orange-50 mt-5 pt-8 pb-8 rounded-3xl drop-shadow-lg'>
          <div className='text-center mx-auto'>
            <h2 className='text-4xl font-extrabold mb-6 text-purple-800'>All blogs posts</h2>
            <h2 className='text-2xl font-bold text-slate-800 mb-4'> Savoring Flavors, One Recipe at a Bite</h2>
          </div>
          <div className='md:flex ml-6 md:ml-96'>
            <input type="text" className='rounded-2xl w-[40%] text-4xl' />
            <button className='bg-orange-500 text-white pl-7 pr-7 pt-4 pb-4 text-4xl rounded-2xl ml-5'>search</button>
          </div>
          </div>
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
              <img className='rounded-full mr-3' style={{height: 40}} src={item.authorImage} alt="" />
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
        </div>
    );
};

export default Blog;
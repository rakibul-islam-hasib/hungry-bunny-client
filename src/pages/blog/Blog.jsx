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
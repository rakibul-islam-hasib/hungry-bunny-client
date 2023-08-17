import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [ blogs, setBlogs ] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
            console.log(data);
        })
    }, [])

    return (
        <div>
            <div className="grid md:grid-cols-2 md:gap-8 gap-3 lg:grid-cols-3 mt-10 mx-auto">
        {blogs.map((item) => (
          <div key={item._id} className='p-2 border overflow-hidden shadow-lg rounded-md'>
            <img className="w-full rounded h-48 object-cover rounded-lg" src={item.blogImage} alt="Food Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <p>{item.blogHeading}</p>
              </div>
              <p className="text-gray-700 text-base">{item.authorName}</p>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default Blog;

{/* <div key={item._id} className='p-2 border overflow-hidden shadow-lg rounded-md'>
            <img className="w-full rounded h-48 object-cover" src='' alt="Food Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"></div>
              <p className="text-gray-700 text-base"></p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-600 font-semibold text-lg"> taka</span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
                  Details
                </button>
              </div>
            </div>
          </div> */}
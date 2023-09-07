import { useState } from "react";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import { useEffect } from "react";
import { BiMessageAltDetail } from 'react-icons/bi';
import { FaTrashRestoreAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

function ManageBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    // console.log(page)
    const [totalItem, setTotalItem] = useState(1);
    const totalPage = Math.ceil(totalItem / 10);
    const axios = useAxiosFetch();
    useEffect(() => {
      axios.get('/blogs/total/count')
        .then(res => setTotalItem(res.data.total))
        .catch(err => console.log(err))
  
      axios.get(`/blogs?limit=10&page=${page}`)
        .then(res => setBlogs(res.data))
        .catch(err => console.log(err))
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    return (
        <div className="mt-20 ml-6 mr-6">
<div className="flex justify-between items-center">
<h2 className="text-4xl font-bold">Total Blogs: <span>0</span></h2>
<form className='w-[40%]'>
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
    <hr className="w-full h-1 mx-auto my-2 bg-black border-0 rounded dark:bg-gray-700"></hr>    
    <div>
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-2xl">
             #
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              update
            </th>
            <th scope="col" className="px-6 py-3">
              details
            </th>
            <th scope="col" className="px-6 py-3">
              action
            </th>
          </tr>
        </thead>

        <tbody>
          {
            blogs.map((item, idx) => <tr key={item.idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">  
            <td className="px-6 py-4">
              <p className="text-2xl font-bold">{idx + 1}</p>
            </td>
            <td className="px-6 py-4">
              <img className="rounded-xl border-2 " style={{height:50}} src={item.blogImage} alt="" />
            </td>
            <td className="px-6 py-4">
              <p>{item.blogHeading.slice(0,30)}</p>
            </td>
            <td className="px-6 py-4">
            <Link to={`/blogs/${item._id}`} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z"/>
</svg> </Link>
            </td>
            <td className="px-6 py-4">
            <Link to={`/blogs/${item._id}`} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> <BiMessageAltDetail className="text-2xl"/> </Link>
            </td>
            <td className="px-6 py-4">
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"><FaTrashRestoreAlt className="text-2xl"/> </button>
            </td>
          </tr>)
          }
        </tbody>
      </table>
    </div>  
    </div>
        </div>
    );
}

export default ManageBlogs;
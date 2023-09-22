import { useState } from "react";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import { useEffect } from "react";
import { BiMessageAltDetail } from 'react-icons/bi';
import { FaCalendarAlt, FaEdit, FaTrashRestoreAlt } from 'react-icons/fa';
import { Link, ScrollRestoration } from "react-router-dom";
import { Pagination } from "@mui/material";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [ loading, setLoading ] = useState(true)
  const [page, setPage] = useState(1);
  // console.log(blogs)
  const [totalItem, setTotalItem] = useState(1);
  const totalPage = Math.ceil(totalItem / 15);
  const axios = useAxiosFetch();
  useEffect(() => {
    setBlogs(true)
    axios.get('/blogs/total/count')
      .then(res => setTotalItem(res.data.total))
      .catch(err => console.log(err))

    axios.get(`/blogs?limit=16&page=${page}`)
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err))
      .finally(() =>{
        setLoading(false)
      })
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const handleDelete = _id => {
    // console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/blogs/${_id}`, {
          method: 'DELETE'
        })
          .then(data => {
            console.log(data.data)
            if (data.data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your blog has been deleted.',
                'success'
              )
            }
          })
      }
    })

  }

  if (loading) return (<div>Loading...</div>)

  return (
    <div className="mt-20 ml-6 mr-6">
      <Helmet>
        <title>Hungry Bunny || admin || manage blogs</title>
      </Helmet>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold">Total Blogs: <span>{blogs.length}</span></h2>
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
      {/* <div>
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
                blogs.map((item, idx) => <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    <p className="text-2xl font-bold">{idx + 1}</p>
                  </td>
                  <td className="px-6 py-4">
                    <img className="rounded-xl border-2 " style={{ height: 50 }} src={item.blogImage} alt="" />
                  </td>
                  <td className="px-6 py-4">
                    <p>{item.blogHeading}</p>
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/dashboard/manage-blogs/${item._id}`} type="button"
                      className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"> <FaEdit className="text-2xl" />
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/blogs/${item._id}`} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> <BiMessageAltDetail className="text-2xl" /> </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleDelete(item._id)} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"><FaTrashRestoreAlt className="text-2xl" /> </button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div> */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2">
      {
        blogs?.map((item, id) => <div key={item._id} className="border-2 border-orange-500 m-3 rounded-lg relative group hover:-translate-y-4 duration-500">
        <div className="p-2 flex justify-between mr-4">
        <div className="flex">
        <div className="">
        <img className="rounded-xl border-2 mr-3" style={{ height: 130 }} src={item.blogImage} alt="" />
        </div>
        <div className="ml-5">
        <p className="text-2xl font-bold">{item.blogHeading}</p>
        <p>{item.authorName}</p>
        <p className="flex"><span className="mr-2"><FaCalendarAlt/> </span> <span>{item.date}</span></p>
        </div>
        <div className="ml-5 w-10">
        <Link to={`/dashboard/manage-blogs/${item._id}`} type="button"
                      className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-3 py-1 mb-1 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"> <FaEdit className="text-2xl" />
                    </Link>
                    <Link to={`/blogs/${item._id}`} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> <BiMessageAltDetail className="text-2xl" /> </Link>
                    <button onClick={() => handleDelete(item._id)} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"><FaTrashRestoreAlt className="text-2xl" /> </button>

        </div>
        </div>
        </div>

        </div>)
      }
      </div>
      {/* Pagination  */}
      <div className="mt-10 mb-5 text-right text-2xl mx-auto sm:w-[40%] md:w-[20%]">
        <Pagination className='text-right text-2xl font-bold pt-5 pb-5 pr-4 pl-4 rounded-2xl dark:bg-white' onChange={(e, vale) => setPage(vale)} count={totalPage} color="secondary" />
      </div>
      <ScrollRestoration />
    </div>
  );
}

export default ManageBlogs;
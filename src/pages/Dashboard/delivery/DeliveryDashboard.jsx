import { Helmet } from "react-helmet-async";
import { useAuth } from "../../../hooks/useAuth";
import { MdIncompleteCircle } from "react-icons/md";
import { RiPassPendingLine } from "react-icons/ri";
import { TbAdjustmentsCancel } from "react-icons/tb";
import { BiBarChart } from "react-icons/bi";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function DeliveryDashboard() {
  const { user: firebaseUser } = useAuth()

  const data = [
    { "_id": 1, "month": "January", "deliveryNumber": 120 },
    { "_id": 2, "month": "February", "deliveryNumber": 110 },
    { "_id": 3, "month": "March", "deliveryNumber": 130 },
    { "_id": 4, "month": "April", "deliveryNumber": 105 },
    { "_id": 5, "month": "May", "deliveryNumber": 140 },
    { "_id": 6, "month": "June", "deliveryNumber": 125 },
    { "_id": 7, "month": "July", "deliveryNumber": 115 },
    { "_id": 8, "month": "August", "deliveryNumber": 135 },
    { "_id": 9, "month": "September", "deliveryNumber": 125 },
    { "_id": 10, "month": "October", "deliveryNumber": 130 },
    { "_id": 11, "month": "November", "deliveryNumber": 110 },
    { "_id": 12, "month": "December", "deliveryNumber": 145 }
]

  
    return (
        <div className="mt-5">
    <Helmet>
        <title>Hungry Bunny || delivery dashboard </title>
      </Helmet>
      <div className='pb-2 mb-2 flex justify-between items-center'>
        <div className='w-1/3'>
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
                className="block w-full p-3 pl-10 text-xl text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
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
        <div className='flex items-center -mb-5'>
          <button
            type="button"
            className="relative h-10 mr-4 inline-flex items-center p-3 text-sm font-medium text-center text-black duration-400 hover:text-white rounded-lg hover:bg-blue-600 "
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">9</div>
          </button>
          <button
            type="button"
            className="relative h-10 mr-4 inline-flex items-center p-3 text-sm font-medium text-center text-black duration-400 hover:text-white rounded-lg hover:bg-blue-600 "
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 21"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"
              ></path>
            </svg>
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">11</div>
          </button>
          <img className='w-20 rounded-full' src="https://images.generated.photos/P2tzhpRdA_aiFi3kf2sPjw-vYJXi7hQE349GFBGi2ds/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY4MjM4LmpwZw.jpg" alt="user image" />
          <div className="ml-3">
            <h1 className='font-bold text-1xl text-gray-800 mr-6'>{firebaseUser?.displayName}</h1>
            <h1 className='font-bold text-gray-600 mr-6'>rider</h1>

          </div>
        </div>
      </div>
      <hr className="w-full h-1 mx-auto my-2 bg-black border-0 rounded dark:bg-gray-700"></hr>
      <div className="mb-9 gap-x-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex justify-between p-4 bg-gradient-to-r from-sky-600 to-sky-400 rounded-md">
          <div className="text-white">
            <p className="text-4xl font-bold">110</p>
            <h2 className="text-2xl">food delivery complete</h2>
          </div>
          <MdIncompleteCircle className="text-5xl text-white" />
        </div>
        <div className="flex justify-between p-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-md">
          <div className="text-white">
            <p className="text-4xl font-bold"> 10</p>
            <h2 className="text-2xl">pending delivery</h2>
          </div>
          <RiPassPendingLine className="text-5xl text-white" />
        </div>
        <div className="flex justify-between p-4 bg-gradient-to-r from-violet-600 to-violet-400 rounded-md">
          <div className="text-white">
            <p className="text-4xl font-bold"> 50</p>
            <h2 className="text-2xl">cancel delivery</h2>
          </div>
          <TbAdjustmentsCancel className="text-5xl text-white" />
        </div>
        <div className="flex justify-between p-4 bg-gradient-to-r from-pink-600 to-pink-400 rounded-md">
          <div className="text-white">
            <p className="text-4xl font-bold"> 500</p>
            <h2 className="text-2xl">Customer Reviews</h2>
          </div>
          <BiBarChart className="text-5xl text-white" />
        </div>
      </div>
      {/* charts about monthly complete ride */}
      <div className="mt-6">
<h2 className="ml-6 text-3xl">Rider Last year summary</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="deliveryNumber" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
      </div>
      {/* table recent complete food ride */}
      <div className='mt-10 bg-white'>
        <h2 className='text-gray-600 font-bold ml-10 pt-10 pb-7 text-3xl drop-shadow-3xl font-sans'>Top Reviews</h2>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <div className="inline-block min-w-full overflow-hidden">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 text-2xl md:text-4xl">
                #
              </th>
              <th scope="col" className="hidden sm:table-cell px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
                Customer image
              </th>
              <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
                Customer Name
              </th>
              <th scope="col" className="hidden sm:table-cell px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
                Customer Area
              </th>
              <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-1/6 px-2 py-2 sm:px-4 sm:py-3 md:py-4">Number</td>
              <td className="hidden sm:table-cell w-1/6 px-2 py-2 sm:px-4 sm:py-3 md:py-4">
                <img
                  className="rounded-lg"
                  style={{ maxWidth: '90px' }}
                  src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="food image"
                />
              </td>
              <td className="w-1/6 px-2 py-2 sm:px-4 sm:py-3 md:py-4">Pizza</td>
              <td className="hidden sm:table-cell w-1/6 px-2 py-2 sm:px-4 sm:py-3 md:py-4">Pending</td>
              <td className="w-1/6 px-2 py-2 sm:px-4 sm:py-3 md:py-4">$2999</td>
            </tr>
            {/* Add more table rows here */}
          </tbody>
        </table>
      </div>
    </div>
       </div>
        </div>
    );
}

export default DeliveryDashboard;
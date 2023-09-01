import React from "react";

const AdminOrder = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Price
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Quantity
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Burger</td>
          <td className="px-6 py-4 whitespace-nowrap">260</td>
          <td className="px-6 py-4 whitespace-nowrap">2</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button className="px-4 py-2 font-medium text-white bg-green-600 rounded-full hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
              Edit
            </button>
            <button className="rounded-full  ml-2 px-4 py-2 font-medium text-white bg-orange-600  hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Pizza </td>
          <td className="px-6 py-4 whitespace-nowrap">490</td>
          <td className="px-6 py-4 whitespace-nowrap">1</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
              Inactive
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button className="px-4 py-2 font-medium text-white bg-green-600 rounded-full hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
              Edit
            </button>
            <button className="rounded-full  ml-2 px-4 py-2 font-medium text-white bg-orange-600  hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Pizza </td>
          <td className="px-6 py-4 whitespace-nowrap">490</td>
          <td className="px-6 py-4 whitespace-nowrap">1</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
              Inactive
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button className="px-4 py-2 font-medium text-white bg-green-600 rounded-full hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
              Edit
            </button>
            <button className="rounded-full  ml-2 px-4 py-2 font-medium text-white bg-orange-600  hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Pizza </td>
          <td className="px-6 py-4 whitespace-nowrap">490</td>
          <td className="px-6 py-4 whitespace-nowrap">1</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
              Inactive
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button className="px-4 py-2 font-medium text-white bg-green-600 rounded-full hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
              Edit
            </button>
            <button className="rounded-full  ml-2 px-4 py-2 font-medium text-white bg-orange-600  hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdminOrder;

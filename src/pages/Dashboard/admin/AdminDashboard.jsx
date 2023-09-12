import React, { useState } from 'react';

const AdminDashboard = () => {
    const tabs = [
        { id: 1, label: 'Users' },
        { id: 2, label: 'Resturent' },
        { id: 3, label: 'Menus' },
      ];

      const [activeTab, setActiveTab] = useState(tabs[0].id);

      const handleTabClick = (tabId) => {
        setActiveTab(tabId);
      };
    return (
        <div className="w-full mx-auto text-center m-8">
        <div className=" ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'bg-primary text-white rounded-full'
                  : 'bg-gray-200 text-gray-700'
              } py-2 px-4 border-r`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Dynamic  */}
        {/* <div className="p-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${
                activeTab === tab.id ? 'block' : 'hidden'
              } tab-content`}
            >
              Content for {tab.label} tab (ID: {tab.id}).
            </div>
          ))}
        </div> */}


        {/* static */}
           <div className="p-4 ">
        <div
          className={`${
            activeTab === tabs[0].id ? 'block' : 'hidden'
          } tab-content`}
        >
          {/* User table */}
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Title
          </th>
         
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Role
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://i.pravatar.cc/150?img=1"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  Jane Cooper
                </div>
                <div className="text-sm text-gray-500">
                  jane.cooper@example.com
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              Regional Paradigm Technician
            </div>
            <div className="text-sm text-gray-500">Optimization</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            jane.cooper@example.com
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
           
            <a href="#" className="ml-2 text-red-600 hover:text-red-900">
              Delete
            </a>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://i.pravatar.cc/150?img=1"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  Jane Cooper
                </div>
                <div className="text-sm text-gray-500">
                  jane.cooper@example.com
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              Regional Paradigm Technician
            </div>
            <div className="text-sm text-gray-500">Optimization</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            jane.cooper@example.com
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
           
            <a href="#" className="ml-2 text-red-600 hover:text-red-900">
              Delete
            </a>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://i.pravatar.cc/150?img=1"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  Mickeel Clark
                </div>
                <div className="text-sm text-gray-500">
                  clark@example.com
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              Regional Paradigm Technician
            </div>
            <div className="text-sm text-gray-500">Optimization</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            jane.cooper@example.com
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
           
            <a href="#" className="ml-2 text-red-600 hover:text-red-900">
              Delete
            </a>
          </td>
        </tr>

        {/* More rows... */}

      </tbody>
    </table>
        </div>
        <div
          className={`${
            activeTab === tabs[1].id ? 'block' : 'hidden'
          } tab-content`}
        >
          Content for {tabs[1].label} tab (ID: {tabs[1].id}).
        </div>
        <div
          className={`${
            activeTab === tabs[2].id ? 'block' : 'hidden'
          } tab-content`}
        >
          Content for {tabs[2].label} tab (ID: {tabs[2].id}).
        </div>
      </div>
    
      </div>
    );
};

export default AdminDashboard;
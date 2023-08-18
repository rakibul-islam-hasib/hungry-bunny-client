import React, { useState } from 'react';
import { Menu } from '@headlessui/react';

function Temp() {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="App">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <span className="rounded-md shadow-sm">
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
              {selectedOption}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 -mr-1 text-violet-200"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 00-1 1v10a1 1 0 002 0V4a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </Menu.Button>
          </span>
        </div>
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option) => (
            <Menu.Item key={option}>
              {({ active }) => (
                <button
                  onClick={() => setSelectedOption(option)}
                  className={`${
                    active
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700'
                  } group flex items-center w-full px-4 py-2 text-sm`}
                >
                  {option}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default Temp;

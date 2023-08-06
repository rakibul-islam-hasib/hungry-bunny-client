// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed h-screen w-60 bg-gray-800 transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Sidebar content */}
      <h1>This is a side  bar component</h1>
    </div>
  );
};

export default Sidebar;

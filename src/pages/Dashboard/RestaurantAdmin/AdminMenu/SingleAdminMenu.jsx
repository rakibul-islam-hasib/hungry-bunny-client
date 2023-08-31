import React from "react";

const SingleAdminMenu = ({ menu }) => {
  const { id, image } = menu;
  return (
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={image} alt="Image" />
        <div className="absolute top-0 right-0">
          <div className="w-32 h-8 absolute top-4 -right-8">
            <div className="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
              SALE
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Product Sale</h3>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          bibendum auctor felis, vel consequat odio ullamcorper eu.
        </p>
      </div>
    </div>
  );
};

export default SingleAdminMenu;

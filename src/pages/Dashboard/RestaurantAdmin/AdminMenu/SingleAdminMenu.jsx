import React from "react";

const SingleAdminMenu = ({menu}) => {
  const { id, food_name, image, description, price,category,restaurant_name } = menu

  return (
    <div key={id} className={` border overflow-hidden shadow-lg rounded-md ${id === 1 ? 'w-full' : ''}`}>
      <div>
        <img className="w-full h-64 object-cover transition transform duration-200  hover:-translate-y-2 rounded-lg relative" src={image} alt="Food Image" />
      </div>
      <div className=" py-4">
        <div className="font-semibold text-xl mb-2">{food_name}</div>
        <p className="text-gray-700 text-base h-10">{description.slice(0, 70)}</p>
        <div className="flex items-center gap-2">
            <p>
              <span className="text-sm font-bold text-primary">{category}</span>
            </p>
            <p className='text-sm text-gray-400 font-bold'>By</p>
            <p className="text-sm font-bold text-slate-900">{restaurant_name}</p>
          </div>
        <div className="flex justify-between items-center  h-14">
          <span className="text-gray-600 font-semibold text-lg">{price} Taka</span>
          <button className="  ">
            {/* <FaRegBookmar className="text-2xl transform transition duration-300 hover:scale-125" /> */}

          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleAdminMenu;

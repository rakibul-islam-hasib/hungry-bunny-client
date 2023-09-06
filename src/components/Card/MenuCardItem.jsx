import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MenuCardItem = ({id,title,description,price,image}) => {

    const history = useNavigate()

    const handleRoute = () => {
        history.push(`/MainMenu/${title}`);
    }

    return (
        <div>
            <div key={id} className={` border overflow-hidden shadow-lg rounded-md ${id === 1 ? 'w-full' : ''}`}>
              <div>
                <img className="w-full   object-cover transition transform duration-200  hover:-translate-y-2 rounded-lg relative" src={image} alt="Food Image" />
              </div>
              <div className=" py-4">
                <div className="font-semibold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description.slice(0, 70)}</p>
                <div className="flex justify-between items-center  h-14">
                  <span className="text-gray-600 font-semibold text-lg">{price} Taka</span>
                  <button className="  ">
                    <FaRegBookmark className="text-2xl transform transition duration-300 hover:scale-125" />

                  </button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default MenuCardItem;
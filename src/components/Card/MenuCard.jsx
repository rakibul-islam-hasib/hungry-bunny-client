
import pizza from '../../assets/icons/menu/icons8-pizza.svg';
import bbq from '../../assets/icons/menu/icons8-bbq.svg';
import burger from '../../assets/icons/menu/icons8-burger.svg';
import vegan from '../../assets/icons/menu/icons8-vegan.svg';
import sushi from '../../assets/icons/menu/icons8-sushi.svg';

import React, { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import useMenu from "../../hooks/useMenu";
import Skeleton from '../../pages/Menu/Skeleton';
import MenuCardItem from './MenuCardItem';




const MenuCard = () => {
  
  

  const MenuCategory = [
    {
      id: 1,
      name: 'Pizza',
      image: pizza,
    },
    {
      id: 2,
      name: 'Snacks',
      image: bbq,
    },
    {
      id: 3,
      name: 'Burger',
      image: burger,
    },
    {
      id: 4,
      name: 'Biryani',
      image: vegan,
    },
    {
      id: 5,
      name: 'Sushi',
      image: sushi,
    }
  ]
  const [menuTab, setMenuTab] = useState('Pizza')
  const [loading, setLoading] = useState(false)

//loading 
useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 1000)
}, [])



  const [menuItems] = useMenu();
  const handleMenuTabs = (type) => {
    setMenuTab(type);
  }

  return (


    <div>
      <div className="text-center lg:w-[70%] w-full sm:w-[90%] md:w-[80%] mx-auto">
        <h3 className="font-semibold text-4xl mx-auto ">Popular Menu</h3>
        <p className="font-semibold mt-2">
          Discover the essence of our culinary artistry with our signature dishes. From the savoriness of our perfectly grilled steaks to the delicate balance of flavors in our artisanal pasta, these creations are the epitome of gastronomic excellence.
        </p>
      </div>

      {/*  */}
      <div className="hidden md:flex justify-between flex-wrap">
        {
          MenuCategory.map(item => <div key={item.id}
            className={menuTab === `${item.name}`? 'border rounded-2xl hover:border-primary hover:bg-primary hover:bg-opacity-5 border-orange-300 lg:px-20 py-2  transform transition duration-300 hover:scale-105' : 'border rounded-2xl hover:border-primary hover:bg-primary hover:bg-opacity-5 border-orange-300 lg:px-20 py-2  transform transition duration-300 hover:scale-105'}  onClick={() => handleMenuTabs(item.name)}
          >
            <div className='text-center'>
              {/* <p className={menuTab === 'Breakfast' ? "active_menu_tab poppins  bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Breakfast')}>BREAKFAST</p> */}
              <img src={item.image} className='w-[50px]' alt="" />
              <h1>{item.name}</h1>
            </div>
          </div>)
        }
      </div>

      <div className="mx-auto md:px-20 px-6 mt-10">

        <div className="grid md:grid-cols-2 md:gap-8 gap-3 lg:grid-cols-3 mt-10 mx-auto">


          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"> */}
            {menuItems.filter((menu, idx) => menuTab === menu.category).map((menu, idx) => (
              loading ? <Skeleton key={idx} /> : <MenuCardItem key={idx} {...menu} />
            ))}
          {/* </div> */}


          {/* {menuItems.map((menu) => (
            <div key={menu.id} className={` border overflow-hidden shadow-lg rounded-md ${menu.id === 1 ? 'w-full' : ''}`}>
              <div>
                <img className="w-full   object-cover transition transform duration-200  hover:-translate-y-2 rounded-lg relative" src={menu.image} alt="Food Image" />
              </div>
              <div className=" py-4">
                <div className="font-semibold text-xl mb-2">{menu.title}</div>
                <p className="text-gray-700 text-base">{menu.description.slice(0, 70)}</p>
                <div className="flex justify-between items-center  h-14">
                  <span className="text-gray-600 font-semibold text-lg">{menu.price} Taka</span>
                  <button className="  ">
                    <FaRegBookmark className="text-2xl transform transition duration-300 hover:scale-125" />

                  </button>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
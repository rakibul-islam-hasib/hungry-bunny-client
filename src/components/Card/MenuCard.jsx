
import pizza from '../../assets/icons/menu/icons8-pizza.svg';
import bbq from '../../assets/icons/menu/icons8-bbq.svg';
import burger from '../../assets/icons/menu/icons8-burger.svg';
import vegan from '../../assets/icons/menu/icons8-vegan.svg';
import sushi from '../../assets/icons/menu/icons8-sushi.svg';

import React, { useEffect, useState } from "react";

import useMenu from "../../hooks/useMenu";
import MenuCardItem from './MenuCardItem';
import MenuSkeleton from './MenuSkeleton';
import CategorySkeleton from './CategorySkeleton';




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
  const [loading, setLoading] = useState(true)

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
      <div className=" md:flex justify-between flex-wrap">
        {
          MenuCategory.map((item, idx) => (loading ? <CategorySkeleton key={idx} /> :


            <div key={item.idx}
              className={menuTab === `${item.name}` ? 'border rounded-2xl hover:border-primary hover:bg-primary hover:bg-opacity-5 border-orange-300 lg:px-20 py-2  transform transition duration-300 hover:scale-105' : 'border rounded-2xl hover:border-primary hover:bg-primary hover:bg-opacity-5 border-orange-300 lg:px-20 py-2  transform transition duration-300 hover:scale-105'} onClick={() => handleMenuTabs(item.name)}
            >
              <div className='text-center'>
                {/* <p className={menuTab === 'Breakfast' ? "active_menu_tab poppins  bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Breakfast')}>BREAKFAST</p> */}
                <img src={item.image} className='w-[50px]' alt="" />
                <h1>{item.name}</h1>
              </div>
            </div>
          ))
        }
      </div>

      <div className="mx-auto md:px-20 px-6 mt-10">

        <div className="grid md:grid-cols-2 md:gap-8 gap-3 lg:grid-cols-3 mt-10 mx-auto">



          {menuItems.filter((menu, idx) => menuTab === menu.category).map((menu, idx) => (
            loading ? <MenuSkeleton key={idx} /> : <MenuCardItem key={idx} {...menu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
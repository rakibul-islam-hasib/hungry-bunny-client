
import React, { useEffect, useState } from 'react';

import FoodItem from './FoodItem';
import Skeleton from '../../components/Skeletons/Skeleton';
import useMenu from '../../hooks/useMenu';


const FoodCard = () => {

  const [menuTab, setMenuTab] = useState('Breakfast')
  const [loading, setLoading] = useState(false)
  const [foods] = useMenu();
  
  //loading 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  //food menu tab 
  const handleMenuTabs = (type) => {
    setMenuTab(type);
  }
  
  return (
    <div className="mx-auto md:px-20 px-6 mt-10  #F4ECE1 #FCFBF7">
      <div className="text-center lg:w-[70%] w-full sm:w-[90%] md:w-[80%] mx-auto">
        <h3 className="font-semibold text-4xl mx-auto ">Our Menu </h3>
        <p className='pt-5'>Delight in savory steaks, fresh seafood, vibrant salads, rich pastas, and decadent desserts. Our menu is designed to bring people together for unforgettable enjoyment.</p>
      </div>


      <section className="my-12 max-w-screen-xl mx-auto px-6">
        {/* food Menu tab  */}
        <div className="flex items-center justify-center space-x-6">
          <p className={menuTab === 'Breakfast' ? "active_menu_tab poppins  bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Breakfast')}>BREAKFAST</p>
          <p className={menuTab === 'Lunch' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Lunch')}>LUNCH</p>
          <p className={menuTab === 'Dinner' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Dinner')}>DINNER</p>
        </div>

        {/* all foods  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {foods.filter((item, idx) => menuTab === item.type).map((item, idx) => (
            loading ? <Skeleton key={idx} /> : <FoodItem key={idx} {...item} />
          ))}
        </div>
      </section>







    </div>
  );
};

export default FoodCard;

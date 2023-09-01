import React from "react";
import { FaBookmark, FaCaretDown, FaRegBookmark, FaShoppingCart } from "react-icons/fa";
import useMenu from "../../hooks/useMenu";

const fakeData = [
  {
    id: 1,
    name: "Delicious Dish 1",
    description: "A mouthwatering dish that will tantalize your taste buds and leave you craving for more.",
    price: 210,
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg"
  },
  {
    id: 2,
    name: "Delicious Dish 2",
    description: "A mouthwatering dish that will tantalize your taste buds and leave you craving for more.",
    price: 220,
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg"
  },
  {
    id: 3,
    name: "Delicious Dish 3",
    description: "A mouthwatering dish that will tantalize your taste buds and leave you craving for more.",
    price: 230,
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg"
  },
  {
    id: 4,
    name: "Delicious Dish 4",
    description: "A mouthwatering dish that will tantalize your taste buds and leave you craving for more.",
    price: 240,
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg"
  },
  {
    id: 5,
    name: "Delicious Dish 5",
    description: "A mouthwatering dish that will tantalize your taste buds and leave you craving for more.",
    price: 250,
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg"
  },
  {
    id: 6,
    name: "Delicious Dish 6",
    description: "A mouthwatering dish that will tantalize your taste buds and leave you craving for more.",
    price: 260,
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg"
  }
];



const Card = () => {


  const [menuItems] = useMenu();


  return (

    
    <div className="mx-auto md:px-20 px-6 mt-10">
      <div className="text-center lg:w-[70%] w-full sm:w-[90%] md:w-[80%] mx-auto">
        <h3 className="font-semibold text-4xl mx-auto ">Popular Menu</h3>
        <p className="font-semibold mt-2">
          Discover the essence of our culinary artistry with our signature dishes. From the savoriness of our perfectly grilled steaks to the delicate balance of flavors in our artisanal pasta, these creations are the epitome of gastronomic excellence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:gap-8 gap-3 lg:grid-cols-3 mt-10 mx-auto">
        {menuItems.map((menu) => (
          <div key={menu.id} className={` border overflow-hidden shadow-lg rounded-md ${menu.id === 1 ? 'w-full' : ''}`}>
            <div>
              <img className="w-full   object-cover transition transform duration-200  hover:-translate-y-2 rounded-lg relative" src={menu.image} alt="Food Image" />
            </div>
            <div className=" py-4">
              <div className="font-bold text-xl mb-2">{menu.name}</div>
              <p className="text-gray-700 text-base">{menu.description.slice(0, 70)}</p>
              <div className="flex justify-between items-center  h-14">
                <span className="text-gray-600 font-semibold text-lg">{menu.price} Taka</span>
                <button className="  ">
                  <FaRegBookmark className="text-2xl hover:text-3xl" />

                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
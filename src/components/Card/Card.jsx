import React from "react";
import { FaShoppingCart } from "react-icons/fa";

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
  return (
    <div className="mx-auto px-20 mt-10">
      <div className="text-center lg:w-[70%] w-full sm:w-[90%] md:w-[80%] mx-auto">
        <h3 className="font-semibold text-4xl mx-auto ">Popular Menu</h3>
        <p className="font-semibold mt-2">
          Discover the essence of our culinary artistry with our signature dishes. From the savoriness of our perfectly grilled steaks to the delicate balance of flavors in our artisanal pasta, these creations are the epitome of gastronomic excellence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 space-x-8 lg:grid-cols-3 mt-10 mx-auto gap-y-8">
        {fakeData.map((item) => (
          <div key={item.id} className=" p-2 border overflow-hidden shadow-lg rounded-md">
            <img className="w-full rounded h-48 object-cover" src={item.image} alt="Food Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-600 font-semibold text-lg">{item.price} Taka</span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
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
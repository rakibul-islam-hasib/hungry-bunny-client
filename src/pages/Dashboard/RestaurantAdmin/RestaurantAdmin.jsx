import React from "react";
import AdminCart from "./AdminCart";
import AdminProgress from "./AdminProgress";
import AdminEvalute from "./AdminEvalute";

const RestaurantAdmin = () => {
  return (
    <div className="mt-10">
      <div className="lg:flex">
        <div className="lg:w-4/6 h-full rounded-md">
          {/* Admin cart */}
          <div className="bg-orange-50 ">
            <AdminCart></AdminCart>
          </div>
          {/* Admin Cart */}
          <AdminProgress></AdminProgress>
          {/*Admin Evalute  */}
          <AdminEvalute></AdminEvalute>
        </div>
        <div className="lg:w-2/6 h-full  ml-4 ">
          <h2 className="text-center font-semibold text-xl ">
            Daily Tranding menu
          </h2>
          {/* Card 1 */}
          <div className="flex border-2 border-orange-300 mt-4 rounded-md">
            <img
              className="w-20 mr-2 p-2"
              src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000"
              alt=""
            />

            <div className="flex pt-6 text-lg font-medium">
              <h4>Chicken Burger</h4>
              <h4 className=" pl-6">200 Taka</h4>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex border-2 border-orange-300 mt-4 rounded-md">
            <img
              className="w-20 mr-2 p-2"
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1.jpg"
              alt=""
            />

            <div className="flex pt-6 text-lg font-medium">
              <h4>Veg Burger</h4>
              <h4 className=" pl-6">100 Taka</h4>
            </div>
          </div>
          {/* card 3 */}
          <div className="flex border-2 border-orange-300 mt-4 rounded-md">
            <img
              className="w-20 mr-2 p-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFI4BixiPkJC68qptx1xto2n4MHFNeZnQ-nw&usqp=CAU"
              alt=""
            />

            <div className="flex pt-6 text-lg font-medium">
              <h4>Beef Burger</h4>
              <h4 className=" pl-6">290 Taka</h4>
            </div>
          </div>
          {/* card 4 */}
          <div className="flex border-2 border-orange-300 mt-4 rounded-md">
            <img
              className="w-20 mr-2 p-2"
              src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000"
              alt=""
            />

            <div className="flex pt-6 text-lg font-medium">
              <h4>Chicken Burger</h4>
              <h4 className=" pl-6">200 Taka</h4>
            </div>
          </div>
          {/* card 5 */}
          <div className="flex border-2 border-orange-300 mt-4 rounded-md">
            <img
              className="w-20 mr-2 p-2"
              src="https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800"
              alt=""
            />

            <div className="flex pt-6 text-lg font-medium">
              <h4>Chicken Pizza</h4>
              <h4 className=" pl-6">600 Taka</h4>
            </div>
          </div>

          {/* Category  */}
          <div className="bg-orange-200  mt-10 pt-5 p-6 rounded-md">
            <h4>Category</h4>
            <div className="grid grid-cols-3 pt-10 gap-6 text-center">
              <div className="">
                <img
                  className=" text-center"
                  src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000"
                  alt=""
                />
                <p>Burger</p>
              </div>
              <div className="">
                <img
                  className=" text-center"
                  src="https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800"
                  alt=""
                />
                <p>Pizza</p>
              </div>
              <div className="">
                <img
                  className=" text-center"
                  src="https://www.eatingwell.com/thmb/vFO43UyAy2NBfjOG6wADLLCE-Kc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cucumber-sandwich-eddcc95811f5426094ea5dbea6a6b026.jpg"
                  alt=""
                />
                <p>Sandwich</p>
              </div>
              <div className="">
                <img
                  className=" text-center"
                  src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000"
                  alt=""
                />
                <p>Burger</p>
              </div>
              <div className="">
                <img
                  className=" text-center"
                  src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000"
                  alt=""
                />
                <p>Burger</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantAdmin;

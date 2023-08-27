import React from "react";
import { BiStar, BiUser } from "react-icons/bi";
import {} from "react-icons/fa";
import { TbSquareChevronUp } from "react-icons/tb";

const AdminEvalute = () => {
  return (
    <div className="bg-orange-50 mt-8 p-6">
      <h3 className="text-lg font-extrabold">Evaluate</h3>
      <div className="lg:flex pt-5 text-center  gap-8 my-4">
        <div className="text-center border-r-2 p-2">
          <BiStar className="text-6xl mx-auto"></BiStar>
          <p>Top ranked for clean food</p>
        </div>
        <div className="text-center border-r-2 p-2">
          <TbSquareChevronUp className="text-6xl mx-auto"></TbSquareChevronUp>
          <p>Top Quality Food</p>
        </div>
        <div className="text-center border-r-2 p-2">
          <BiUser className="text-6xl mx-auto"></BiUser>
          <p>Trusted and relaiable </p>
        </div>
        <div className="text-center  ">
          <BiStar className="text-6xl mx-auto"></BiStar>
          <p>Top ranked for clean food</p>
        </div>
      </div>
    </div>
  );
};

export default AdminEvalute;

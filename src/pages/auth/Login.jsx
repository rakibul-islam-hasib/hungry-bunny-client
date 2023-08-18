import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/authThunks";
import bgImg from '../../assets/img/footer_bg.jpg';
import { FormControl } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();

  const handleFromSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const res = await dispatch(loginUser(data.email, data.password));
      if (res) {
        console.log(res)
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
    <div className="w-full h-full pr-10 md:p-10 bg-opacity-70">
      <form className="px-2 mx-2  md:mx-auto border border-gray-700 rounded-2xl text-gray-700 md:px-16 w-3/4 md:w-1/2">
      <h2 className="text-3xl font-bold p-4 md:mx-36">Log In</h2>
        <div>
          
          <input className="bg-transparent border-b-2 w-full" type="email" id="email" placeholder="Enter Your Email" />
        </div>
      
        <div className="py-4">
          
          <input className="bg-transparent border-b-2 w-full" type="password"
            id="password" placeholder="Password" />
        </div>
        <div className="flex justify-between text-sm">
          <p><input  type="checkbox" />Remember me</p>
          <Link><p className="text-blue-500">Forgot Password?</p></Link>
        </div>
        <button className="bg-blue-500 text-white rounded-md my-6 px-4 py-2 ">Log in</button>
        <p className="text-sm">Don&apos;t Have an Account? Please <Link><span className="text-blue-500">Register</span></Link></p>
      </form>
    </div>
    </div>
  );
};

export default Login;



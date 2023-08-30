import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/authThunks";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  if (user) return <Navigate to='/' />
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
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => handleFromSubmit(e)}
        className="bg-white p-8 shadow-md rounded-md w-96"
      >
        <h1 className="text-2xl font-semibold mb-4">Login to hungry Bunny</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded px-3 py-2 focus:outline-none "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border rounded px-3 py-2 focus:outline-none "
          />
        </div>
        <p className="my-4">
          Create an account{" "}
          <span className="text-orange-500 font-semibold">
            <Link to="/register">Register Here</Link>
          </span>{" "}
        </p>
        <button
          type="submit"
          className="bg-orange-500 text-white rounded-full px-4 py-2 w-full hover:bg-orange-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
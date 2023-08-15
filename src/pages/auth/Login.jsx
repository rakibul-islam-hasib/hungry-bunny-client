import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Login to hungry Bunny</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <p className="my-4">
          Create an account{" "}
          <span className="text-orange-500 font-semibold">
            <Link to="/signup">Register Here</Link>
          </span>{" "}
        </p>
        <button
          type="submit"
          className="bg-orange-500 text-white rounded-full px-4 py-2 w-full hover:bg-orange-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

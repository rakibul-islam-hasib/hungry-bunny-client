import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, updateName } from "../../redux/slices/authThunks";
import { setUser } from "../../redux/slices/authSlice";
const Register = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  // console.log(user, loading, error)
  console.log(user, 'user', loading, 'loading', error, 'error')

  const handleFromSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    // console.log(data);
    try {
      const res = await dispatch(registerUser(data.email, data.password));
      if (res) {
        dispatch(updateName(data.name))
        dispatch(setUser(res.user));
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form onSubmit={(e) => handleFromSubmit(e)} className="bg-white dark:bg-gray-800 p-8 shadow-md rounded-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Join Us</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
            name="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <p className="my-4">
          Already have an account{" "}
          <span className="text-orange-500 font-semibold">
            <Link to="/login">Login</Link>
          </span>{" "}
        </p>
        <button
          type="submit"
          className="rounded-full bg-orange-500 text-white px-4 py-2 w-full hover:bg-orange-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
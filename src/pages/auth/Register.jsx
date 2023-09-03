import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, updateName } from "../../redux/slices/authThunks";
import { setUser } from "../../redux/slices/authSlice";
import useAxiosFetch from "../../hooks/useAxiosFetch";
const Register = () => {
  const dispatch = useDispatch();
  const axios = useAxiosFetch();
  const { user } = useSelector((state) => state.auth);

  if (user) return <Navigate to="/" />;

  const handleFromSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const userData = {
      email: data.email,
      name: data.name,
      joined: new Date(),
      role: 'user',
      phone: {
        p1: '',
        p2: ''
      },
      address: '',
      following: [],
      followers: [],
      likedPost: [],
      isVerified: false,
      photo: 'https://i.ibb.co/txQbC7p/casual-life-3d-profile-picture-of-person-in-glasses-and-orange-shirt.png',
    }

    try {
      const userCredential = await dispatch(registerUser(data.email, data.password));
      if (userCredential.user) {
        await dispatch(updateName(data.name)); // Wait for the display name update
        await dispatch(setUser(userCredential.user)); // Set user in Redux store
        if (userCredential.user) {
          await axios.post('/user-info', userData); // Post user info to API
        }
      }
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
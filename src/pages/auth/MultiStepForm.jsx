import React, { useState } from 'react';
import './MultiStepForm.css'


import { Link, Navigate } from "react-router-dom";
import SocialLogin from './SocialLogin';
import { useDispatch, useSelector } from 'react-redux';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import { registerUser, updateName } from '../../redux/slices/authThunks';
import { setUser } from '../../redux/slices/authSlice';

const MultiStepForm = () => {
  const dispatch = useDispatch();
  const axios = useAxiosFetch();
  const { user } = useSelector((state) => state.auth);


  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    location: '',
    password: '',
  });



  if (user) return <Navigate to="/" />;

  const handleFromSubmit = async () => {
    // e.preventDefault();
    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData);
    const userData = {
      email: formData.email,
      name: formData.name,
      gender: formData.gender,
      location: formData.location,
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
    console.log(formData);
    try {
      const userCredential = await dispatch(registerUser(formData.email, formData.password));
      if (userCredential.user) {
        await dispatch(updateName(formData.name)); // Wait for the display name update
        await dispatch(setUser(userCredential.user)); // Set user in Redux store
        if (userCredential.user) {
          await axios.post('/user-info', userData); // Post user info to API
          console.log(userData);
        }
        console.log('Not Under userCredential.user')
      }
    } catch (err) {
      console.log(err);
    }
  }


  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (

    <div className=" to-gray-600  min-h-screen flex items-center justify-center ">
      <form onSubmit={(e) => handleFromSubmit(e)} className=" to-blue-500  w-full md:w-2/3 lg:w-1/3 p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
        {step === 1 && (
          <div>
            <h1 className="text-3xl font-semibold mb-4">Your Name</h1>
            <label className="text-gray-700 mt-4">Please Enter Your Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="input-field"
            />
            <div className="flex justify-end mt-6">
              <button onClick={handleNext} className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                <span className="items-center relative font-bold px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                  Next
                </span>
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h1 className="text-3xl font-semibold mb-4">Your Email</h1>
            <label className="text-gray-700 mt-4">Please Enter Your Email </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input-field"
            />
            <div className="flex justify-between mt-6">
              <button onClick={handlePrev} className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                <span className="items-center relative font-bold px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                  Previous
                </span>
              </button>
              <button onClick={handleNext} className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                <span className="items-center relative font-bold px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                  Next
                </span>
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h1 className="text-3xl font-semibold mb-4">Gender</h1>
            <div className="flex flex-col">
              <label className="text-gray-700 mt-4">Please Select Your Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={handlePrev} className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                <span className="items-center relative font-bold px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                  Previous
                </span>
              </button>
              <button onClick={handleNext} className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                <span className="items-center relative font-bold px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                  Next
                </span>
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <h1 className="text-3xl font-semibold mb-4">Location</h1>
            <div className="flex flex-col">
              <label className="text-gray-700 mt-4">Please Select Your Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select</option>
                <option value="Bagerhat">Bagerhat</option>
                <option value="Bandarban">Bandarban</option>
                <option value="Barguna">Barguna</option>
                <option value="Barishal">Barishal</option>
                <option value="Bhola">Bhola</option>
                <option value="Bogra">Bogra</option>
                <option value="Brahmanbaria">Brahmanbaria</option>
                <option value="Chandpur">Chandpur</option>
                <option value="Chapainawabganj">Chapainawabganj</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Chuadanga">Chuadanga</option>
                <option value="Cox's Bazar">Coxs Bazar</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dinajpur">Dinajpur</option>
                <option value="Faridpur">Faridpur</option>
                <option value="Feni">Feni</option>
                <option value="Gaibandha">Gaibandha</option>
                <option value="Gazipur">Gazipur</option>
                <option value="Gopalganj">Gopalganj</option>
                <option value="Habiganj">Habiganj</option>
                <option value="Jamalpur">Jamalpur</option>
                <option value="Jashore">Jashore</option>
                <option value="Jhalokathi">Jhalokathi</option>
                <option value="Jhenaidah">Jhenaidah</option>
                <option value="Joypurhat">Joypurhat</option>
                <option value="Khagrachari">Khagrachari</option>
                <option value="Khulna">Khulna</option>
                <option value="Kishoreganj">Kishoreganj</option>
                <option value="Kurigram">Kurigram</option>
                <option value="Kushtia">Kushtia</option>
                <option value="Lakshmipur">Lakshmipur</option>
                <option value="Lalmonirhat">Lalmonirhat</option>
                <option value="Madaripur">Madaripur</option>
                <option value="Magura">Magura</option>
                <option value="Manikganj">Manikganj</option>
                <option value="Meherpur">Meherpur</option>
                <option value="Moulvibazar">Moulvibazar</option>
                <option value="Munshiganj">Munshiganj</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Naogaon">Naogaon</option>
                <option value="Narail">Narail</option>
                <option value="Narayanganj">Narayanganj</option>
                <option value="Narsingdi">Narsingdi</option>
                <option value="Natore">Natore</option>
                <option value="Nawabganj">Nawabganj</option>
                <option value="Netrokona">Netrokona</option>
                <option value="Nilphamari">Nilphamari</option>
                <option value="Noakhali">Noakhali</option>
                <option value="Pabna">Pabna</option>
                <option value="Panchagarh">Panchagarh</option>
                <option value="Patuakhali">Patuakhali</option>
                <option value="Pirojpur">Pirojpur</option>
                <option value="Rajbari">Rajbari</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangamati">Rangamati</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Satkhira">Satkhira</option>
                <option value="Shariatpur">Shariatpur</option>
                <option value="Sherpur">Sherpur</option>
                <option value="Sirajganj">Sirajganj</option>
                <option value="Sunamganj">Sunamganj</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Tangail">Tangail</option>
                <option value="Thakurgaon">Thakurgaon</option>
              </select>
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={handlePrev} className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                <span className="items-center relative font-bold px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                  Previous
                </span>
              </button>
              <button onClick={handleNext} className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                <span className="items-center relative font-bold px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                  Next
                </span>
              </button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <h1 className="text-3xl font-semibold mb-4">Password</h1>
            <label className="text-gray-700 mt-4">Please Enter Your Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="input-field"
            />
            <div className="flex justify-between mt-6">
              <button onClick={handlePrev} className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                <span className="items-center relative font-bold px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                  Previous
                </span>
              </button>
              <button type='submit' className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                <span className="items-center relative font-bold px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                  Registation
                </span>
              </button>
            </div>

          </div>
        )}
        <p className="mt-4 w-2/3 mx-auto">
          Already have an account{" "}
          <span className="text-orange-500 font-semibold">
            <Link to="/login">Login</Link>
          </span>{" "}
        </p>
        <div>

          <SocialLogin />
        </div>
      </form>
    </div>

  );
};

export default MultiStepForm;










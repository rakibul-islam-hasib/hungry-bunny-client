import React, { useState } from 'react';
import { FiUser, FiMail, FiBriefcase, FiSend, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { storage } from '../../../../config/firebase/firebase.config';
import { v4 } from 'uuid';

import useUserSecure from '../../../../hooks/useUserSecure';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { HiOutlineMail } from 'react-icons/hi';
import { BiCurrentLocation, BiMoney, BiSolidRename } from 'react-icons/bi';
import { useAuth } from '../../../../hooks/useAuth';
import { categoryOptions, paymentOptions } from '../../../../utils';

const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const ForRestaurant = () => {
    const initialOpeningHours = daysOfWeek.reduce((acc, day) => {
        acc[day] = { openingTime: '09:00 AM', closingTime: '05:00 PM' };
        return acc;
    }, {});


    const [user] = useUserSecure();


    console.log(user);
    const axios = useAxiosSecure();
    const [submittedData, setSubmittedData] = useState({});
    const [loading, setLoading] = useState(false);
    const [addingOpeningHours, setAddingOpeningHours] = useState(false);
    const [openingHours, setOpeningHours] = useState(initialOpeningHours);
    const [is24hOpen, setIs24hOpen] = useState(false);



    const onSubmit = (e) => {
        e.preventDefault();
        if (!user) return toast.error('Please login first');
        setLoading(true);
        const data = new FormData(e.target);
        const formValues = Object.fromEntries(data.entries());
        console.log(formValues)
        //   add the opening hours to the form values
        formValues.openingHours = openingHours;
        formValues.status = 'pending';
        formValues.applicationDate = new Date();
        formValues.applicationFor = 'restaurant';
        formValues.userId = user._id;
        formValues.userEmail = user.email;

        console.log(formValues);
        setSubmittedData(formValues);

        axios.post('/application/apply', formValues).then((res) => {
            setLoading(false);
            console.log(res.data)
            toast.success('Your Application Is Pending');
        })
        .catch((err) => {
            console.log(err);
          })
          .finally((event.target.reset()))

    };

    const inputVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };


    const handleOpeningHoursChange = (day, field, value) => {
        setOpeningHours((prevHours) => ({
            ...prevHours,
            [day]: { ...prevHours[day], [field]: value },
        }));
    };

    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size < 2 * 1024 * 1024) {
            setSelectedFile(file);
            const selectedUrl = URL.createObjectURL(file);
            setImagePreview(selectedUrl);
        } else {
            setSelectedFile(null);
            setImagePreview(null);
            toast.error('Please select a file smaller than 2MB');
        }
    };

    const uploadMenuPic = (file) => {
        setIsLoading(true);
        const imgId = v4().slice(0, 10);
        const imagesRef = ref(
            storage,
            `application-image/${imgId + selectedFile?.name}`
        );

        const uploadingPromise = uploadBytes(imagesRef, file);

        toast
            .promise(uploadingPromise, {
                pending: 'Uploading...',
                success: 'Image Uploaded Successfully',
                error: 'Something went wrong, please try again later',
            })
            .then(() => {
                getDownloadURL(ref(storage, `application-image/${imgId + selectedFile?.name}`))
                    .then((url) => {
                        console.log(url);
                        if (url) {
                            setImageURL(url);
                            setIsLoading(false);
                        } else {
                            setIsLoading(false);
                        }
                    })
                    .catch((err) => {
                        setIsLoading(false);
                    });
            });
    };

    return (
        <>
            <div className="  flex justify-center items-center w-3/4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-lg  shadow-md w-[100%]"
                >
                    <h2 className="text-2xl font-bold mb-4">Apply as a Restaurant</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        {/* 
                        // Restaurant admin name 
                        */}
                        <div className='space-y-3  '>


                            <div className='flex justify-between w-full'>
                                <div className="mb-4 w-1/2">
                                    <motion.label
                                        variants={inputVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5 }}
                                        className="text-primary block mb-1  font-semibold text-2xl"
                                        htmlFor="name"
                                    >
                                        Admin Name
                                    </motion.label>
                                    <div className="flex items-center">
                                        <FiUser className="text-primary" />
                                        <input
                                            defaultValue={user?.name}
                                            disabled
                                            readOnly
                                            className="ml-2 text-red-500 w-full border-b border-primary focus:border-secondary outline-none"
                                            type="text"
                                            name="name"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 w-1/2">
                                    <motion.label
                                        variants={inputVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5 }}
                                        className="text-primary block mb-1 font-semibold text-2xl"
                                        htmlFor="name"
                                    >
                                        Admin Email
                                    </motion.label>
                                    <div className="flex items-center">
                                        <HiOutlineMail className="text-primary" />
                                        <input
                                            defaultValue={user?.email}
                                            disabled
                                            readOnly
                                            className="ml-2 text-primary w-full border-b border-primary focus:border-secondary outline-none"
                                            type="email"
                                            name="email"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between w-full'>
                                <div className="mb-4 w-1/2">
                                    <motion.label
                                        variants={inputVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5 }}
                                        className="text-primary block mb-1 font-semibold text-2xl"
                                        htmlFor="restaurant_name"
                                    >
                                        Restaurant Name
                                    </motion.label>
                                    {/* <small>This will be your Restaurant name </small> */}
                                    <div className="flex items-center">
                                        <BiSolidRename className="text-primary" />
                                        <input
                                            className="ml-2 text-gray-600 w-full border-b border-primary focus:border-secondary outline-none"
                                            type="text"
                                            placeholder='Enter Your Restaurant Name'
                                            name="restaurant_name"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 w-1/2">
                                    <motion.label
                                        variants={inputVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5 }}
                                        className="text-primary block mb-1 font-semibold text-2xl"
                                        htmlFor="contact_number"
                                    >
                                        Contact Number
                                    </motion.label>
                                    <div className="flex items-center">
                                        <BiSolidRename className="text-primary" />
                                        <input
                                            className="ml-2 text-gray-600 w-full border-b border-primary focus:border-secondary outline-none"
                                            type="text"
                                            placeholder='Restaurant Phone Number'
                                            name="contact_number"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex  justify-between w-full'>
                                <div className="mb-4 w-1/2">
                                    <motion.label
                                        variants={inputVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5 }}
                                        className="text-primary block mb-1 font-semibold text-2xl"
                                        htmlFor="location"
                                    >
                                        Restaurant Location
                                    </motion.label>
                                    <div className="flex items-center">
                                        <BiCurrentLocation className="text-primary" />
                                        <input
                                            className="ml-2 text-gray-600 w-full border-b border-primary focus:border-secondary outline-none"
                                            type="text"
                                            placeholder='Your Restaurant Location'
                                            name="location"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 w-1/2">
                                    <motion.label
                                        variants={inputVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5 }}
                                        className="text-primary block mb-1 font-semibold text-2xl"
                                        htmlFor="location"
                                    >
                                        Payment Method
                                        {/* TODO:  */}
                                    </motion.label>
                                    <div className="flex items-center">
                                        <BiMoney className="text-primary" />
                                        <select
                                            name="payment_method"
                                            className="input-field w-full ml-2"
                                        >
                                            {
                                                paymentOptions.map((location, index) => (
                                                    <option key={index} value={location.value}>{location.label}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 flex items-center justify-between">
                            <label className="text-gray-700 block mb-1 md:flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    id="addOpeningHours"
                                    name="openingHoursOption"
                                    value="addOpeningHours"
                                    checked={is24hOpen ? false : addingOpeningHours}
                                    onChange={() => {
                                        setIs24hOpen(false); // Make sure is24hOpen is set to false
                                        setAddingOpeningHours(true);
                                    }}
                                />
                                Add Opening Hours
                            </label>
                            <label className="text-gray-700 block mb-1 md:flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    id="24h"
                                    name="openingHoursOption"
                                    value="24h"
                                    checked={is24hOpen}
                                    onChange={() => {
                                        setIs24hOpen(true);
                                        setAddingOpeningHours(false);
                                        setOpeningHours((prevHours) => ({
                                            ...prevHours,
                                            ...daysOfWeek.reduce((acc, day) => {
                                                acc[day] = {
                                                    openingTime: '00:00 AM',
                                                    closingTime: '00:00 AM',
                                                };
                                                return acc;
                                            }, {}),
                                        }));
                                    }}
                                />
                                24 Hours Open
                            </label>
                        </div>


                        {
                            !is24hOpen ? (
                                addingOpeningHours &&
                                daysOfWeek.map((day) => (
                                    <div className="mb-4" key={day}>
                                        <motion.label
                                            variants={inputVariants}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="text-gray-700 block mb- font-semibold text-2xl1"
                                        >
                                            {day} Opening Hours
                                        </motion.label>
                                        <div className="flex items-center">
                                            <select
                                                className="ml-2 w-1/2 border border-gray-300 focus:border-secondary outline-none py-1"
                                                value={openingHours[day].openingTime}
                                                onChange={(e) =>
                                                    handleOpeningHoursChange(
                                                        day,
                                                        'openingTime',
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="09:00 AM">09:00 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                {/* ... Add more options */}
                                            </select>
                                            <span className="mx-2">to</span>
                                            <select
                                                className="w-1/2 border border-gray-300 focus:border-secondary outline-none py-1"
                                                value={openingHours[day].closingTime}
                                                onChange={(e) =>
                                                    handleOpeningHoursChange(
                                                        day,
                                                        'closingTime',
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="05:00 PM">05:00 PM</option>
                                                <option value="06:00 PM">06:00 PM</option>
                                                {/* ... Add more options */}
                                            </select>
                                        </div>
                                    </div>
                                ))
                            ) : null
                        }


                        {/* Image Preview */}
                        {imagePreview && (
                            <div className="mb-4">
                                <label className="text-gray-700 block mb-1">Image Preview</label>
                                <img src={imagePreview} alt="Image Preview" className="max-w-xs" />
                            </div>
                        )}

                        {/* File Input */}
                        <div className="">
                            <label
                                className="text-gray-700 block mb-1"
                                htmlFor="image"
                            >
                                Image
                            </label>
                            <div className="flex items-center">
                                <FiBriefcase className="text-gray-500" />
                                <input
                                    onChange={handleFileChange}
                                    className="ml-2 rounded-lg px-2 placeholder:text-sm py-1 w-full border border-gray-300 focus:border-secondary outline-none resize-none"
                                    id="image"
                                    name="image"
                                    type="file"
                                />
                            </div>
                        </div>

                        {/* Upload Button */}
                        {selectedFile && (
                            <div className="mt-4">
                                <button
                                    onClick={() => uploadMenuPic(selectedFile)}
                                    className="px-4 py-2 bg-primary text-white rounded-md focus:outline-none"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Uploading...' : 'Upload Image'}
                                </button>
                            </div>
                        )}

                        {/* Display Image URL */}
                        {imageURL && (
                            <div className="my-2">
                                <p className="text-green-500">Your Image Uploaded SuccesFully</p>
                            </div>
                        )}




                        {/* Add more fields like Cuisine Type, Restaurant Description, etc. here */}

                        <div className="my-4">
                            <motion.label
                                variants={inputVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-gray-700 block mb- font-semibold text-2xl1"
                                htmlFor="description"
                            >
                                Please Write Description About Your Restaurant
                            </motion.label>
                            <div className="flex items-center">
                                <FiBriefcase className="text-gray-500" />
                                <textarea
                                    placeholder="Write Description About your Restaurant Here ..."
                                    className="ml-2 rounded-lg px-2 placeholder:text-sm py-1 w-full border border-gray-300 focus:border-secondary outline-none resize-none"
                                    id="description"
                                    name="description"
                                ></textarea>
                            </div>
                        </div>

                        {/* Add more fields like Location, Phone Number, etc. here */}

                        <div className="text-center">
                            <motion.button
                                variants={buttonVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="flex items-center px-4 py-2 bg-primary text-white rounded-md focus:outline-none"
                            >
                                <FiSend className="mr-2" />
                                Apply
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </>
    );
};

export default ForRestaurant;

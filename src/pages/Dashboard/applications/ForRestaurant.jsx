import React, { useState } from 'react';
import { FiUser, FiMail, FiBriefcase, FiSend, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

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



    const [submittedData, setSubmittedData] = useState({});
    const [loading, setLoading] = useState(false);
    const [addingOpeningHours, setAddingOpeningHours] = useState(false);
    const [openingHours, setOpeningHours] = useState(initialOpeningHours);
    const [is24hOpen, setIs24hOpen] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append('name', e.target.name.value);
        data.append('email', e.target.email.value);
        const formValues = Object.fromEntries(data.entries());
        //   add the opening hours to the form values
        formValues.openingHours = openingHours;
        //   set the loading state to true
        setLoading(true);
        console.log(formValues);
        setSubmittedData(formValues);
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

    return (
        <>
            <div className=" min-h-screen flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-lg shadow-md w-[60%]"
                >
                    <h2 className="text-2xl font-bold mb-4">Apply as a Restaurant</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-4">
                            <motion.label
                                variants={inputVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5 }}
                                className="text-primary block mb-1"
                                htmlFor="name"
                            >
                                Restaurant Admin Name
                            </motion.label>
                            <div className="flex items-center">
                                <FiUser className="text-primary" />
                                <input
                                    defaultValue={'name'}
                                    disabled
                                    readOnly
                                    className="ml-2 text-primary w-full border-b border-primary focus:border-secondary outline-none"
                                    type="text"
                                    name="name"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <motion.label
                                variants={inputVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5 }}
                                className="text-primary block mb-1"
                                htmlFor="name"
                            >
                                Admin Email
                            </motion.label>
                            <div className="flex items-center">
                                <FiUser className="text-primary" />
                                <input
                                    defaultValue={'admin@hungry.com'}
                                    disabled
                                    readOnly
                                    className="ml-2 text-primary w-full border-b border-primary focus:border-secondary outline-none"
                                    type="email"
                                    name="email"
                                />
                            </div>
                        </div>
                        <div className="mb-4 flex items-center justify-between">
                            <label
                                className="text-gray-700 block mb-1 md:flex items-center cursor-pointer"
                                htmlFor="addOpeningHours"
                            >
                                <input
                                    type="checkbox"
                                    id="addOpeningHours"
                                    className="mr-2"
                                    checked={addingOpeningHours}
                                    disabled={is24hOpen}
                                    onChange={() =>
                                        setAddingOpeningHours(!addingOpeningHours)
                                    }
                                />
                                Add Opening Hours
                            </label>
                            <label htmlFor="24h" className="text-gray-700 block mb-1 md:flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    id="24h"
                                    className="mr-2"
                                    checked={openingHours['Monday'].openingTime === '00:00 AM'}
                                    onChange={(e) => {
                                        setIs24hOpen(e.target.checked)
                                        if (e.target.checked) {
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
                                        } else {
                                            setOpeningHours(initialOpeningHours);
                                        }
                                    }}
                                />
                                24 Hours Open
                            </label>
                        </div>

                        {
                            addingOpeningHours &&
                            daysOfWeek.map((day) => (
                                <div className="mb-4" key={day}>
                                    <motion.label
                                        variants={inputVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="text-gray-700 block mb-1"
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
                            ))}

                        {/* Add more fields like Cuisine Type, Restaurant Description, etc. here */}

                        <div className="mb-4">
                            <motion.label
                                variants={inputVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-gray-700 block mb-1"
                                htmlFor="experience"
                            >
                                Experience
                            </motion.label>
                            <div className="flex items-center">
                                <FiBriefcase className="text-gray-500" />
                                <textarea
                                    placeholder="Tell us about your experience..."
                                    className="ml-2 rounded-lg px-2 placeholder:text-sm py-1 w-full border border-gray-300 focus:border-secondary outline-none resize-none"
                                    id="experience"
                                    name="experience"
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
                                Submit
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>

















            {/* Display submission result */}
            {submittedData?.name && (
                <div className="bg-gray-200 min-h-screen flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-lg shadow-md"
                    >
                        <h2 className="text-2xl font-bold">
                            Your <span className="text-secondary">application is</span> submitted
                        </h2>
                        <p className="text-lg font-semibold">Name: {submittedData?.name}</p>
                        <p className="text-lg font-semibold">Email: {submittedData?.email}</p>
                        <p className="text-lg font-semibold">Experience: {submittedData?.experience}</p>
                        <p>Now you need to wait for a few moments for admin approval</p>
                    </motion.div>
                </div>
            )}

            {submittedData?.reject && (
                <div className="bg-gray-200 min-h-screen flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <p>You are not able to join as a restaurant partner</p>
                        <p className="font-bold">Reason :</p>
                        <div className="w-1/2">{submittedData?.reject}</div>
                        <p className="mt-10">
                            If you think it is a mistake then you can contact our admin{' '}
                            <span>
                                <a href="mailto:admin@yourwebsite.com">admin@yourwebsite.com</a>
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ForRestaurant;

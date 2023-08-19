import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <button
                onClick={openModal}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
                Edit Profile
            </button>
            <Transition.Root show={isOpen} as={React.Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="flex items-center justify-center min-h-screen">
                        <Transition.Child
                            as={motion.div}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="bg-white p-8 rounded-lg shadow-lg"
                        >
                            {/* Your form components go here */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    Profile Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                                />
                            </div>
                            {/* ... other form fields ... */}
                            <div className="flex justify-end mt-6">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                                >
                                    Save
                                </button>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
};

export default UserProfile;

import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
const PostModal = ({ isOpen, onClose, onSuccess }) => {
    return (
        <Transition.Root show={isOpen} as={React.Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={onClose}
            >
                <div
                    className="flex items-center justify-center min-h-screen"
                >
                    <Transition.Child
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
                        className="bg-white p-8 rounded-lg md:min-w-[300px] shadow-lg"
                    >
                        {/* Your form components go here */}
                        <div className="">
                            <p className='text-2xl font-bold text-red-500'>Are you sure you want to delete this post ?</p>
                            <p>You can not get back this post</p>
                        </div>
                        {/* ... other form fields ... */}
                        <div className="flex justify-end mt-6">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 mr-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onSuccess}
                                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                            >
                                Ok Delete
                            </button>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default PostModal;

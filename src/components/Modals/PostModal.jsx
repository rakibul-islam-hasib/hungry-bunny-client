import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const PostModal = ({ isOpen, onClose }) => {
    return (
        <Transition show={isOpen} as={React.Fragment}>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <Transition.Child
                    enter="transition-opacity ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black opacity-40"></div>
                </Transition.Child>
                <Transition.Child
                    enter="transition-opacity ease-in-out duration-300 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition-opacity ease-in-out duration-300 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        {/* Modal content here */}
                        <h2 className="text-lg font-semibold mb-2">Modal Title</h2>
                        <p className="text-gray-600">Modal content goes here.</p>
                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </Transition.Child>
            </div>
        </Transition>
    );
};

export default PostModal;

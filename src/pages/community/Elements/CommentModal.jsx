import React, { useState } from 'react';
import { Dialog, Transition, FocusTrap } from '@headlessui/react';
import { motion } from 'framer-motion';
import './css/Style.css'
import { IoCloseSharp } from 'react-icons/io5';

const PostModal = ({ isOpen, onClose, onSuccess, data, postId }) => {

    console.log(postId === data._id ? data?.comments : '', 'data from PostModal')

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
                        className="bg-white p-8 rounded-lg md:min-w-[500px] shadow-lg"
                    >
                        {/* Your form components go here */}
                        <FocusTrap>
                            <button tabIndex={0} style={{ position: 'absolute', left: '-9999px' }}></button>
                            <div className="relative">
                                <div className="absolute -right-6 -top-6 p-2 bg-red-500 rounded-xl ">
                                    <IoCloseSharp onClick={onClose} className="text-2xl text-white cursor-pointer" />
                                </div>
                                <div className="h-[300px] border p-4 rounded-xl comment-section overflow-y-auto">
                                    {
                                        data?.comments?.map((comment, i) => (
                                            <div key={i} className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <img src={comment?.user?.photo} alt="" className='w-8 h-8 rounded-full' />
                                                    <div className="ml-2">
                                                        <p className='font-bold'>{comment?.user?.name}</p>
                                                        <p>{comment?.comment}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <p className='text-xs text-gray-400'>{comment?.createdAt}</p>
                                                    <p className='text-xs text-gray-400'>Reply</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* ... other form fields ... */}
                            {/* <div className="flex justify-end mt-6">
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
                            </div> */}
                        </FocusTrap>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default PostModal;
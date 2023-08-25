import React, { useState } from 'react';
import { Dialog, Transition, FocusTrap } from '@headlessui/react';
import { motion } from 'framer-motion';
import { IoCloseSharp, IoSend } from 'react-icons/io5';
import './css/Style.css';

const PostModal = ({ isOpen, onClose, onSuccess, data, postId }) => {
    const [comment, setComment] = useState('');

    return (
        <Transition.Root show={isOpen} as={React.Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={onClose}
            >
                <div className="flex items-center justify-center min-h-screen">
                    <Transition.Child
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
                        className="bg-white p-8 md:p-12 rounded-lg w-full md:w-[500px] shadow-lg"
                    >
                        <FocusTrap>
                            <button tabIndex={0} style={{ position: 'absolute', left: '-9999px' }}></button>
                            <div className="relative">
                                <div className="absolute -right-6 -top-6 p-2 bg-red-500 rounded-xl ">
                                    <IoCloseSharp onClick={onClose} className="text-2xl text-white cursor-pointer" />
                                </div>
                                <div className="h-[300px] md:h-[400px] border p-4 rounded-xl comment-section overflow-y-auto">
                                    {data?.comments == undefined || data?.comments === null ? (
                                        <div className="h-full w-full text-center flex justify-center items-center">
                                            <p className="text-center text-gray-400 animate-pulse">Loading...</p>
                                        </div>
                                    ) : data?.comments?.length === 0 ? (
                                        <div className="h-full w-full text-center flex justify-center items-center">
                                            <p className="text-center text-gray-400">No comments yet</p>
                                        </div>
                                    ) : (
                                        data?.comments?.map((comment, i) => (
                                            <div key={i} className="flex border px-2 py-1 rounded-md items-start justify-between mb-4">
                                                <div className="flex items-center">
                                                    <img src={comment?.user?.photo} alt="" className="w-8 h-8 rounded-full" />
                                                    <div className="ml-2">
                                                        <p className="font-bold">{comment?.user?.name}</p>
                                                        <p className="text-sm text-gray-600">{comment?.comment}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-xs text-gray-400">{comment?.createdAt}</p>
                                                    <button className="text-xs text-gray-400 hover:text-gray-600 focus:outline-none">
                                                        Reply
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div className="mt-4 flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Add a comment..."
                                        className="flex-grow px-4 py-2 rounded-l-xl border focus:outline-none  comment-input"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                    <button
                                        className="bg-primary text-white px-4 py-[10px] rounded-r-xl flex items-center justify-center  comment-submit"
                                        onClick={() => {
                                            // Handle comment submission logic here
                                            // You can add the comment to the data.comments array
                                            // and clear the input field by resetting the 'comment' state
                                        }}
                                    >
                                        <IoSend className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        </FocusTrap>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default PostModal;
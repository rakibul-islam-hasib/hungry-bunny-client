import React, { useState } from 'react';
import { Dialog, Transition, FocusTrap } from '@headlessui/react';
import { motion } from 'framer-motion';
import { IoCloseSharp, IoSend } from 'react-icons/io5';
import './css/Style.css';
import { Tooltip } from '@mui/material';
import useUserSecure from '../../../hooks/useUserSecure';
import { useAuth } from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { toast } from 'react-hot-toast';
import { RiDeleteBin5Line } from 'react-icons/ri';
import moment from 'moment';

const PostModal = ({ isOpen, onClose, onSuccess, data: PostData, postId, refetchPost }) => {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    const [comment, setComment] = useState('');
    const { user } = useAuth();
    const axios = useAxiosSecure();
    const [data, isLoading, userRefetch] = useUserSecure(user?.email);

    // console.log(data, 'data from comment modal')
    const { data: postComments, refetch: commentRefetch } = useQuery({
        queryKey: ['comments', postId],
        queryFn: async () => {
            const res = await axios.get(`/community-post/comment/${postId}`);
            return res.data;
        },
        enabled: !!postId && !!isOpen,
    })
    const handleComment = () => {
        if (comment === '' || user == null || isLoading) return;
        const commentData = {
            comment: comment,
            commented: new Date(),
            user: {
                name: data?.name,
                email: data?.email,
                photo: data?.photo,
                isVerified: data?.isVerified,
                role: data?.role || 'user'
            }
        };
        axios.put(`/community-post/comment/${postId}`, commentData)
            .then(res => {
                console.log(res.data, 'res from comment modal')
                if (res.data.modifiedCount > 0) {
                    setComment('');
                    userRefetch();
                    commentRefetch();
                    refetchPost();
                }
            })
            .catch(err => console.log(err))
    };

    const deleteComment = (id) => {
        const myPromise = axios.delete(`/community-post/comment/${postId}/${id}`);
        toast.promise(myPromise, {
            loading: 'Deleting comment...',
            success: 'Comment deleted!',
            error: 'Error deleting comment',
        }).then(res => {
            // console.log(res)
            if (res.data.modifiedCount > 0) {
                userRefetch();
                commentRefetch();
                refetchPost();
            }
        })
    }

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
                                <div className="absolute -right-6 -top-6 p-2 bg-red-500 dark:bg-blue-600 rounded-xl ">
                                    <IoCloseSharp onClick={onClose} className="text-2xl text-white cursor-pointer" />
                                </div>
                                <div className="h-[300px] md:h-[400px] border p-4 rounded-xl comment-section overflow-y-auto">
                                    {PostData?.comments == undefined || PostData?.comments === null ? (
                                        <div className="h-full w-full text-center flex justify-center items-center">
                                            <p className="text-center text-gray-400 animate-pulse">Loading...</p>
                                        </div>
                                    ) : PostData?.comments?.length === 0 ? (
                                        <div className="h-full w-full text-center flex justify-center items-center">
                                            <p className="text-center text-gray-400">No comments yet</p>
                                        </div>
                                    ) : (
                                        postComments?.map((comment, i) => (
                                            <div key={i} className="flex border px-2 py-1 rounded-md items-start justify-between mb-4">
                                                <div className="flex items-center">
                                                    <img src={comment?.user?.photo} alt="" className="w-9 h-9 rounded-full" />
                                                    <div className="ml-2">
                                                        <div className="font-bold flex items-center text-base">
                                                            <div
                                                                className="flex items-center gap-1"
                                                            >{comment?.user?.name}
                                                                <Tooltip title={moment(comment?.commented).format('MMM Do YY')}>
                                                                    <p className="text-xs text-gray-400">{
                                                                        timeAgo.format(new Date(comment?.commented), 'mini')
                                                                    }</p>
                                                                </Tooltip>
                                                            </div>
                                                            <div>
                                                                {
                                                                    comment?.user?.isVerified && <Tooltip arrow title='This user is verified by Hungry Bunny' placement='top'>
                                                                        <div
                                                                            className='w-[15px] h-[15px] inline-block ml-1'
                                                                        // src={verified}
                                                                        >
                                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                                                                                <g fill="#1d58e8" fillRule="nonzero">
                                                                                    <g transform="scale(8.53333,8.53333)">
                                                                                        <path d="M27.303,13.768l-0.909,-0.545c-0.387,-0.232 -0.649,-0.615 -0.767,-1.05c-0.002,-0.008 -0.004,-0.016 -0.007,-0.024c-0.121,-0.439 -0.085,-0.907 0.136,-1.306l0.515,-0.927c0.526,-0.948 -0.148,-2.115 -1.232,-2.133l-1.07,-0.018c-0.453,-0.008 -0.873,-0.209 -1.193,-0.529c-0.003,-0.003 -0.007,-0.007 -0.01,-0.01c-0.321,-0.32 -0.522,-0.74 -0.529,-1.193l-0.018,-1.07c-0.019,-1.086 -1.186,-1.76 -2.134,-1.233l-0.927,0.515c-0.398,0.221 -0.866,0.257 -1.306,0.136c-0.008,-0.002 -0.016,-0.004 -0.024,-0.007c-0.435,-0.119 -0.818,-0.38 -1.05,-0.767l-0.545,-0.909c-0.558,-0.93 -1.905,-0.93 -2.463,0l-0.543,0.905c-0.234,0.39 -0.62,0.653 -1.058,0.773c-0.005,0.001 -0.009,0.003 -0.014,0.004c-0.443,0.122 -0.914,0.086 -1.316,-0.137l-0.924,-0.513c-0.948,-0.527 -2.115,0.147 -2.133,1.231l-0.018,1.07c-0.008,0.453 -0.209,0.873 -0.529,1.193c-0.003,0.003 -0.007,0.007 -0.01,0.01c-0.32,0.321 -0.74,0.522 -1.193,0.529l-1.07,0.018c-1.085,0.019 -1.759,1.186 -1.232,2.134l0.515,0.927c0.221,0.399 0.257,0.866 0.136,1.306c-0.002,0.008 -0.004,0.016 -0.007,0.024c-0.119,0.435 -0.38,0.818 -0.767,1.05l-0.909,0.545c-0.93,0.558 -0.93,1.906 0,2.463l0.909,0.546c0.387,0.232 0.649,0.615 0.767,1.05c0.002,0.008 0.004,0.016 0.007,0.024c0.121,0.44 0.085,0.907 -0.136,1.306l-0.515,0.929c-0.526,0.948 0.148,2.115 1.232,2.133l1.07,0.018c0.453,0.008 0.873,0.209 1.193,0.529c0.003,0.003 0.007,0.007 0.01,0.01c0.321,0.32 0.522,0.74 0.529,1.193l0.018,1.069c0.018,1.084 1.185,1.758 2.133,1.232l0.927,-0.515c0.398,-0.221 0.866,-0.257 1.306,-0.136c0.008,0.002 0.016,0.004 0.024,0.007c0.435,0.119 0.818,0.38 1.05,0.767l0.545,0.909c0.558,0.93 1.905,0.93 2.463,0l0.545,-0.909c0.232,-0.387 0.615,-0.649 1.05,-0.767c0.008,-0.002 0.016,-0.004 0.024,-0.007c0.439,-0.121 0.907,-0.085 1.306,0.136l0.927,0.515c0.948,0.526 2.115,-0.148 2.133,-1.232l0.018,-1.069c0.008,-0.453 0.209,-0.873 0.529,-1.193c0.003,-0.003 0.007,-0.007 0.01,-0.01c0.32,-0.321 0.74,-0.522 1.193,-0.529l1.07,-0.018c1.084,-0.018 1.758,-1.185 1.232,-2.133l-0.515,-0.927c-0.221,-0.399 -0.257,-0.866 -0.136,-1.306c0.002,-0.008 0.004,-0.016 0.007,-0.024c0.119,-0.435 0.38,-0.818 0.767,-1.05l0.909,-0.546c0.933,-0.558 0.933,-1.906 0.004,-2.464zM20.707,12.707l-6.56,6.56c-0.188,0.188 -0.442,0.293 -0.707,0.293c-0.265,0 -0.52,-0.105 -0.707,-0.293l-3.453,-3.453c-0.391,-0.391 -0.391,-1.023 0,-1.414c0.391,-0.391 1.023,-0.391 1.414,0l2.746,2.746l5.853,-5.853c0.391,-0.391 1.023,-0.391 1.414,0c0.391,0.391 0.391,1.023 0,1.414z" />
                                                                                    </g>
                                                                                </g>
                                                                            </svg>
                                                                        </div>
                                                                    </Tooltip>
                                                                }
                                                            </div>
                                                        </div>
                                                        <p className="text-sm text-gray-600">{comment?.comment}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">

                                                    <div className="">
                                                        <button
                                                            onClick={() => { toast.error('Reply feature is not available yet') }}
                                                            className="text-xs text-gray-400 hover:text-gray-600 focus:outline-none">
                                                            Reply
                                                        </button>
                                                        <div className="">
                                                            <RiDeleteBin5Line onClick={() => deleteComment(comment?._id)} className="text-xl text-red-500 hover:text-gray-600 cursor-pointer" />
                                                        </div>
                                                    </div>
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
                                        onClick={handleComment}
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
import React, { useState } from 'react';
import moment from 'moment';
import { AiTwotoneLike } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';
import { HiChatAlt2 } from 'react-icons/hi';
import Tooltip from '@mui/material/Tooltip';
import useAxiosFetch from '../../../../hooks/useAxiosFetch';
import useUserSecure from '../../../../hooks/useUserSecure';
import { useAuth } from '../../../../hooks/useAuth';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import '../../css/Post.css';
import PostOptions from './PostOptions';
import { IoCloseSharp } from 'react-icons/io5';
import { toast } from 'react-hot-toast';
import CommentModal from '../../Elements/CommentModal';

const Post = ({ post: data, refetch: postDataRefetch }) => {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    const now = new Date();
    const [loading, setLoading] = useState(false);
    const axios = useAxiosFetch();
    const { user: firebaseUser } = useAuth();
    const [user, , userRefetch] = useUserSecure(firebaseUser?.email);
    const [isOpen, setIsOpen] = useState(false);
    const [postId, setPostId] = useState('');
    const handleLike = () => {
        if (!user) return toast.error('Please login to like this post');
        setLoading(true);
        console.log('like', data._id);
        axios.put(`/community-post/like/${data._id}/${user?._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.result.modifiedCount > 0 && res.data.result2.modifiedCount > 0) {
                    postDataRefetch();
                    userRefetch();
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    };

    const isLiked = user?.likedPost?.includes(data._id);
    return (
        <>
            <div className='shadow bg-gray-100 my-3 px-8 py-5'>
                <div className="">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <img src={data.user.photo} className='w-[40px] rounded-full h-[40px]' alt="" />
                            <div className="">
                                <div className="font-bold inline-flex items-center  mb-0 mt-2 leading-3 text-lg">
                                    {data.user.name}
                                    {
                                        data.user.isVerified && <Tooltip arrow title='This user is verified by Hungry Bunny' placement='top'>
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
                                <Tooltip title={moment(data.posted).format("MMM Do YY")}>
                                    <p className=' text-primary text-[12px]'>
                                        {
                                            // moment(data.posted).format("MMM Do YY")
                                            // moment(data.posted).startOf('hour').fromNow()

                                            // format(data.posted)
                                            timeAgo.format(new Date(data.posted), now)
                                        }
                                    </p>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <PostOptions id={data._id} />
                            <div className="">
                                <IoCloseSharp className='text-3xl' />
                            </div>
                        </div>
                    </div>
                    <div className="border px-6 py-4  mt-4">
                        <p>{data.post}</p>
                    </div>
                    <div className="flex justify-between mt-6 w-[80%] mx-auto">
                        <div className="flex items-center">
                            {
                                loading ? <div className="mt-1 ml-3">
                                    <div className="post-loader">
                                        <div></div>
                                    </div>
                                </div> :
                                    <span className='flex items-center'><AiTwotoneLike onClick={handleLike} className={isLiked ? 'text-3xl cursor-pointer hover:text-primary duration-300 text-blue-700' : 'text-3xl cursor-pointer hover:text-primary duration-300'} />
                                        <h1 className='text-lg mt-1'>{data.likes}</h1></span>
                            }
                        </div>
                        <div className="flex items-center">
                            <HiChatAlt2 onClick={() => {
                                setIsOpen(true)
                                setPostId(data._id)
                            }} className='text-3xl cursor-pointer hover:text-primary duration-300' />
                            <h1 className='text-lg'>{data.comments.length}</h1>
                        </div>
                        <div className="">
                            <BsShareFill className='text-3xl cursor-pointer hover:text-primary duration-300' />
                        </div>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
            <CommentModal refetchPost={postDataRefetch} postId={postId} data={data} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default Post;
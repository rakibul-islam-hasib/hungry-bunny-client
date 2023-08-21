import React from 'react';
import { ImAttachment } from 'react-icons/im';
import { BsImage } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';
import { useAuth } from '../../../hooks/useAuth';
import { Tooltip } from '@mui/material';
import useUserSecure from '../../../hooks/useUserSecure';
import toast from 'react-hot-toast'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useCommunityPost } from '../../../hooks/data/useCommunityPost';

const NewPost = () => {
    const { user: firebaseUser } = useAuth();
    const axios = useAxiosSecure();
    const [user, isLoading, refetch] = useUserSecure(firebaseUser?.email);
    const [, , refetchPost] = useCommunityPost();

    const handlePosting = event => {
        if (isLoading) return;
        event.preventDefault();
        console.log(event.target.post.value);
        const post = event.target.post.value;
        const postData = {
            post: post,
            posted: new Date(),
            user: {
                name: user.name,
                photo: user.photo,
                isVerified: user.isVerified ? true : false,
                role: user.role,
                _id: user._id,
            },
            likes: 0,
            comments: [],
            likedBy: []
        }
        axios.post('/community-post/', postData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    refetchPost();
                    axios.put(`/community-post/${user._id}`, { postId: res.data.insertedId })
                        .then(res => {
                            console.log(res.data);
                            if (res.data.modifiedCount > 0) {
                                refetch();
                                toast.success('Posted successfully');
                            }
                        })
                }
                // refetch();
            })
            .catch(err => console.log(err))
    };


    return (
        <div className='bg-gray-100 rounded-xl px-10 py-7'>
            <div className="border-b-[2px] border-gray-400 pb-3">
                {firebaseUser?.email ? '' : <p className='text-red-500 text-sm'>Please login to new post</p>}
                <h1 className='uppercase text-xl text-center md:text-left font-semibold'>New Post</h1>
            </div>
            <div className="mt-3 flex md:flex-row flex-col items-center gap-5">
                <form className='w-full flex md:flex-row flex-col items-center gap-5' onSubmit={e => handlePosting(e)}>
                    <Tooltip color='red' title={firebaseUser?.email ? 'You can post anything' : 'Please login to new post'} placement='top'>
                        <input
                            disabled={!firebaseUser?.email}
                            type="text"
                            name='post'
                            placeholder='What do you think about us ?'
                            className='outline-none rounded-lg w-full focus:ring-1 ring-primary border-none bg-slate-50 text-base py-2 pl-3 font-semibold'
                        />
                    </Tooltip>
                    <div className="icons flex items-center gap-2">
                        <div className='cursor-pointer  p-2 hover:bg-lime-200 rounded-xl duration-200 hover:text-primary'>
                            <ImAttachment className='text-2xl group-hover:text-primary text-gray-400' />
                        </div>
                        <div className='cursor-pointer  p-2 hover:bg-lime-200 rounded-xl duration-200 hover:text-primary'>
                            <BsImage className='text-2xl text-gray-400 hover:text-primary duration-200' />
                        </div>
                        <button type='submit' className='bg-lime-200 rounded-xl cursor-pointer px-2 py-2 w-fit'>
                            <IoSend className='text-2xl  text-primary' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPost;
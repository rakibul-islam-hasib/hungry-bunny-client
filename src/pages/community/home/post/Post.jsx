import React from 'react';
import moment from 'moment';
import { AiTwotoneLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { BsShareFill } from 'react-icons/bs';
import verified from '../../../../assets/icons/verified.svg'
const Post = ({ post: data }) => {
    console.log(data);
    return (
        <div className='shadow bg-gray-100 my-3 px-8 py-5'>
            <div className="">
                <div className="flex items-center gap-2">
                    <img src={data.user.photo} className='w-[40px] rounded-full h-[40px]' alt="" />
                    <div className="">
                        <div className="font-bold inline-flex items-center  mb-0 mt-2 leading-3 text-lg">
                            {data.user.name}
                            {
                                data.user.isVerified && <img
                                    className='w-[15px] h-[15px] inline-block ml-1'
                                    src={verified}
                                    alt="" />
                            }
                        </div>
                        <p className='mt-0 text-primary text-[12px]'>{moment(data.posted).format("MMM Do YY")}</p>
                    </div>
                </div>
                <div className="border px-6 py-4  mt-4">
                    <p>{data.post}</p>
                </div>
                <div className="flex justify-between mt-6 w-[80%] mx-auto">
                    <div className="flex items-center">
                        <AiTwotoneLike className='text-3xl cursor-pointer hover:text-primary duration-300' />
                        <h1 className='text-lg'>{data.likes}</h1>
                    </div>
                    <div className="flex items-center">
                        <BiCommentDetail className='text-3xl cursor-pointer hover:text-primary duration-300' />
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
    );
};

export default Post;
import React from 'react';
import moment from 'moment';
const Post = ({ post: data }) => {
    console.log(data);
    return (
        <div className='border bg-gray-100 my-3 px-8 py-5'>
            <div className="">
                <div className="flex items-center gap-2">
                    <img src={data.user.photo} className='w-[40px] rounded-full h-[40px]' alt="" />
                    <div className="">
                        <h1 className="font-bold mb-0 leading-3 text-lg">{data.user.name}</h1>
                        <p className='mt-0 text-primary text-[12px]'>{moment(data.posted).format("MMM Do YY")}</p>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default Post;
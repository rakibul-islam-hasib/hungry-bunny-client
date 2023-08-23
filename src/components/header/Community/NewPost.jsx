import React from 'react';
import { ImAttachment } from 'react-icons/im';
import { BsImage } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';

const NewPost = () => {
    return (
        <div className='bg-gray-100 rounded-xl px-10 py-7'>
            <div className="border-b-[2px] border-gray-400 pb-3">
                <h1 className='uppercase text-xl text-center md:text-left font-semibold'>New Post</h1>
            </div>
            <div className="mt-3 flex md:flex-row flex-col items-center gap-5">
                <input
                    type="text"
                    placeholder='What do you think about us ?'
                    className='outline-none rounded-lg w-full focus:ring-1 ring-primary border-none bg-slate-50 text-base py-2 pl-3 font-semibold'
                />
                <div className="icons flex items-center gap-2">
                        <div className='cursor-pointer  p-2 hover:bg-lime-200 rounded-xl duration-200 hover:text-primary'>
                            <ImAttachment className='text-2xl group-hover:text-primary text-gray-400' />
                        </div>
                        <div className='cursor-pointer  p-2 hover:bg-lime-200 rounded-xl duration-200 hover:text-primary'>
                            <BsImage className='text-2xl text-gray-400 hover:text-primary duration-200' />
                        </div> 
                        <div className='bg-lime-200 rounded-xl cursor-pointer px-2 py-2 w-fit'>
                            <IoSend className='text-2xl  text-primary' />
                        </div> 
                </div>
            </div>
        </div>
    );
};

export default NewPost;
import React from 'react';

const NewPost = () => {
    return (
        <div className='bg-gray-100 px-10 py-7'>
            <div className="border-b-[2px] border-gray-400 pb-3">
                <h1 className='uppercase text-xl font-semibold'>New Post</h1>
            </div>
            <div className="mt-3">
                <input
                    type="text"
                    placeholder='What do you think about us ?'
                    className='outline-none w-full border-none bg-transparent text-xl font-semibold'
                />
            </div>
        </div>
    );
};

export default NewPost;
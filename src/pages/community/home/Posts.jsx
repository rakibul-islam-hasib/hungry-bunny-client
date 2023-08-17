import React from 'react';
import Post from './post/Post';

const Posts = () => {
    const fakePostData = [
        {
            id: 1,
            post: 'This is a simple testing post we are working to make this post title',
            posted: 'Wed Aug 16 2023 23:21:44 GMT+0600 (Bangladesh Standard Time)',
            Likes: 10,
            comments: [
                {
                    _id: 1,
                    comment: 'This is the comment of the post',
                    commented: 'Wed Aug 16 2023 23:21:44 GMT+0600 (Bangladesh Standard Time)',
                    user: {
                        name: 'John Doe',
                        isVerified: true,
                        photo: 'https://i.ibb.co/51wz2Fn/pexels-the-lazy-artist-gallery-2527939.jpg'
                    }
                },
                {
                    _id: 2,
                    comment: 'This is the comment of the post',
                    commented: 'Wed Aug 16 2023 23:21:44 GMT+0600 (Bangladesh Standard Time)',
                    user: {
                        name: 'John Doe',
                        isVerified: true,
                        photo: 'https://i.ibb.co/51wz2Fn/pexels-the-lazy-artist-gallery-2527939.jpg'
                    }
                },
            ],
            user: {
                name: 'John Doe',
                isVerified: true,
                photo: 'https://i.ibb.co/51wz2Fn/pexels-the-lazy-artist-gallery-2527939.jpg'
            }
        }
    ]
    return (
        <div>
            {
                fakePostData.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export default Posts;
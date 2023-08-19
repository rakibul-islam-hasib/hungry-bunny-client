import React from 'react';
import Post from './post/Post';

const Posts = () => {
    const fakePostData = [
        {
            id: 1,
            post: 'This is a simple testing post we are working to make this post title',
            posted: '2023-08-19T15:55:28.332Z',
            likes: 10,
            comments: [
                {
                    _id: 1,
                    comment: 'This is the comment of the post',
                    commented: '2023-08-19T15:55:28.332Z',
                    user: {
                        name: 'John Doe',
                        isVerified: true,
                        photo: 'https://i.ibb.co/51wz2Fn/pexels-the-lazy-artist-gallery-2527939.jpg'
                    }
                },
                {
                    _id: 2,
                    comment: 'This is the comment of the post',
                    commented: '2023-08-19T15:55:28.332Z',
                    user: {
                        name: 'John Doe',
                        isVerified: true,
                        photo: 'https://i.ibb.co/51wz2Fn/pexels-the-lazy-artist-gallery-2527939.jpg'
                    }
                },
            ],
            user: {
                name: 'Hasib Hossain',
                isVerified: true,
                photo: 'https://i.ibb.co/5M0BDy4/No-thing.png'
            }
        },
        {
            id: 2,
            post: 'This is a simple testing post we are working to make this post title',
            posted: '2023-08-19T15:55:28.332Z',
            likes: 10,
            comments: [
                {
                    _id: 1,
                    comment: 'This is the comment of the post',
                    commented: '2023-08-19T15:55:28.332Z',
                    user: {
                        name: 'John Doe',
                        isVerified: true,
                        photo: 'https://i.ibb.co/51wz2Fn/pexels-the-lazy-artist-gallery-2527939.jpg'
                    }
                },
                {
                    _id: 2,
                    comment: 'This is the comment of the post',
                    commented: '2023-08-19T15:55:28.332Z',
                    user: {
                        name: 'John Doe',
                        isVerified: true,
                        photo: 'https://i.ibb.co/51wz2Fn/pexels-the-lazy-artist-gallery-2527939.jpg'
                    }
                },
            ],
            user: {
                name: 'John Doe',
                isVerified: false,
                photo: 'https://i.ibb.co/51wz2Fn/pexels-the-lazy-artist-gallery-2527939.jpg'
            }
        },
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
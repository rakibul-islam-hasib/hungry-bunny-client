import React from 'react';
import Post from './post/Post';
import { useCommunityPost } from '../../../hooks/data/useCommunityPost';

const Posts = () => {
    const [postData, loading, refetch] = useCommunityPost();
    if (loading) return <h1>Loading...</h1>
    console.log(postData)
    return (
        <div>
            {
                postData.map(post => <Post refetch={refetch} key={post._id} post={post} />)
            }
        </div>
    );
};

export default Posts;
import React, { useEffect, useState } from 'react';
import Post from './post/Post';
import useAxiosFetch from '../../../hooks/useAxiosFetch';

const Posts = () => {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(true);
    const axios = useAxiosFetch();
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/community-post');
            setPostData(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, [axios])
    if (loading) return <h1>Loading...</h1>
    return (
        <div>
            {
                postData.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export default Posts;
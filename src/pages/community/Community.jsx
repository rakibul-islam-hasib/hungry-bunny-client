import React from 'react';
import NewPost from '../../components/header/Community/NewPost';
import Posts from './home/Posts';

const Community = () => {
    return (
        <section>
            <div className="w-[80%] mx-auto">
                <NewPost />
                <Posts />
            </div>

        </section>
    );
};

export default Community;
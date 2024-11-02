import React from 'react';
import Post from "../components/post/Post";
import {useMyContext} from "../components/contextProvider/MyContext";
import {FC} from "react";





const PostsPage:FC = () => {
    const {posts} = useMyContext();
    return (
        <div>
            {
                posts.map(post=> <Post post={post}/>)
            }
        </div>
    );
}

export default PostsPage;
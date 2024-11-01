import React, { useEffect, useState} from 'react';
import {IPostsModel} from "../models/IPostsModel";
import {getPosts} from "../service/api.service";
import Post from "../components/post/Post";





const PostsPage  = () => {
    const [posts, setPosts] = useState<IPostsModel[]>([])

    useEffect(() => {
        getPosts().then(posts=>setPosts(posts))
    }, []);
    return (
        <div>
            {
                posts.map(post=> <Post post={post}/>)
            }
        </div>
    );
};

export default PostsPage;
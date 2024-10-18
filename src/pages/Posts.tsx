import React, {useEffect, useState} from 'react';
import {IPosts} from "../model/IPosts";
import {getPosts} from "../service/api.service";
import Post from "../components/post/Post";



const Posts = () => {

    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(()=>{
        getPosts().then(posts=> setPosts(posts))
    },[])

    return (
        <div>
            {
                posts.map(posts=><Post key={posts.id} post={posts}/>)
            }
        </div>
    );
};

export default Posts;
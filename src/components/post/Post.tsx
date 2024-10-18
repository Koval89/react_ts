import React, {FC} from 'react';
import {IPosts} from "../../model/IPosts";

type PostProps={
    post:IPosts
}


const Post :FC<PostProps> = ({post}) => {
    return (
        <div key={post.id}>
            <li>{post.id}</li>
            <li>{post.body}</li>
            <li>{post.title}</li>
            <li>{post.userId}</li>

        </div>
    );
};

export default Post;
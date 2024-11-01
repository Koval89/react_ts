import React, {FC} from 'react';
import {IPostsModel} from "../../models/IPostsModel";

type PostProps={
    post:IPostsModel
}

const Post:FC<PostProps> = ({post}) => {
    return (
        <div>
            <ul>
                <li>userId: {post.userId}</li>
                <li>id: {post.id}</li>
                <li>title: {post.title}</li>
                <li>body: {post.body}</li>
            </ul>

        </div>
    );
};

export default Post;
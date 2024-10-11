import React, {FC, ReactNode} from 'react';

import {IPostModel} from "../../model/IPostModel";


type PostProps = {
    item:IPostModel
}

const Post:FC<PostProps &{children?:ReactNode}> = ({item}) => {
    return (
        <div>
            <p>id:{item.id}</p>
            <p>title:{item.title}</p>
            <p>body:{item.body}</p>
            <p>tags:{item.tags}</p>
            <p>reactions:{item.reactions.likes}</p>
            <p>reactions:{item.reactions.dislikes}</p>
            <p>views:{item.views}</p>

        </div>
    );
};

export default Post;
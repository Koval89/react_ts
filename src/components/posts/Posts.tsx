import React, {FC} from 'react';
import Post from "../Post/Post";
import {IPostModel} from "../../model/IPostModel";

type PostsProps={
    posts:IPostModel[]
}

const Posts:FC<PostsProps> = ({posts}) => {



    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Posts;
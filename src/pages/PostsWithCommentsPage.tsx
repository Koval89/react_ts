import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../components/contextProvider/ContextProvider";
import {IPostsModel} from "../models/IPostsModel";
import comment from "../components/comment/Comment";




const PostsWithCommentsPage = () => {
    const [posts, setPosts] = useState<IPostsModel[]>([])
    useEffect(() => {

    }, []);
    const context = useContext(Context)
    console.log(context.postsSlice.allPosts)

    return (
        <div>
            post
            {
                context.commentsSlice.allComments.map(comment=><div>{comment.name}</div>)
            }
        </div>
    );
};

export default PostsWithCommentsPage;
import React, {FC} from 'react';
import IPostsWithCommentsModel from "../../models/IPostsWithCommentsModel";
import Comment from "../comment/Comment";

const PostsWithComments: FC<IPostsWithCommentsModel> = ({id, comments, userId, title, body}) => {
    return (
        <div>
            <p>{title}</p>
            <p>{body}</p>
            <div>
                {
                    comments.map(comment=> <Comment comment={comment}/>)
                }
            </div>
        </div>
    );
};

export default PostsWithComments;
import React, {FC} from 'react';
import Comment from "../components/comment/Comment";
import {useMyContext} from "../components/contextProvider/MyContext";

const CommentsPage:FC = () => {

    const {comments} = useMyContext()

    console.log(comments)
    return (
        <div>
            {
               comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsPage;
import React, {FC} from 'react';
import {IComments} from "../../model/IComments";

type CommentProps={
    comment:IComments
}


const Comment: FC<CommentProps>  = ({comment}) => {
    return (
        <div key={comment.id}>
            <ul>
                <li>{comment.id}</li>
                <li>{comment.body}</li>
                <li>{comment.email}</li>
                <li>{comment.postId}</li>
                <li>{comment.name}</li>

            </ul>

        </div>
    );
};

export default Comment;
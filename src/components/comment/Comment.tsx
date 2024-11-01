import React, {FC} from 'react';
import {ICommentsModel} from "../../models/ICommentsModel";

type CommentProps = {
    comment:ICommentsModel
}

const Comment :FC<CommentProps> = ({comment}) => {
    return (
        <div>
            <ul>
                <li>postId: {comment.postId}</li>
                <li>id: {comment.id}</li>
                <li>name: {comment.name}</li>
                <li>email: {comment.email}</li>
                <li>body: {comment.body}</li>
            </ul>

        </div>
    );
};

export default Comment;
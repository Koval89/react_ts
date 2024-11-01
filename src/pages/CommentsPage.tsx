import React, {useContext, useEffect, useState} from 'react';
import {ICommentsModel} from "../models/ICommentsModel";
import {getComments} from "../service/api.service";

import Comment from "../components/comment/Comment";
import {Context} from "../components/contextProvider/ContextProvider";
import comment from "../components/comment/Comment";

const CommentsPage = () => {

    const [comments, setComments] = useState<ICommentsModel[]>([])

    useEffect(() => {
        getComments().then(comments=>setComments(comments))
    }, []);

    const {commentsSlice} = useContext(Context)

    console.log(commentsSl ice)
    return (
        <div>
            {
                commentsSlice.allComments.map(comment=><Comment comment={comment}/>)
            }
        </div>
    );
};

export default CommentsPage;
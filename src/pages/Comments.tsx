import React, {useEffect, useState} from 'react';
import {IComments} from "../model/IComments";
import {getComments} from "../service/api.service";
import Comment from "../components/comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState<IComments[]>([])

    useEffect(() => {
        getComments().then(comments=>setComments(comments))
    }, []);
    return (
        <div>
            {
                comments.map(comments=><Comment key={comments.id} comment={comments}/>)
            }
        </div>
    );
};

export default Comments;
import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";
import {Context, defaultStorageValue} from "../components/contextProvider/ContextProvider";
import {IPostsModel} from "../models/IPostsModel";
import {getPosts} from "../service/api.service";
import comment from "../components/comment/Comment";
import {ICommentsModel} from "../models/ICommentsModel";




const MainLayout = () => {

    const [posts, setPosts] = useState<IPostsModel[]>([])
    const [comments, setComments] = useState<ICommentsModel[]>([])

    return (
        <div>
            <Menu/>

            <Context.Provider value={{
                postsSlice:{
                    allPosts:posts,
                    post:null
                },
                commentsSlice:{
                    allComments:comments,
                    comment:null
                }
            }}>
                <Outlet/>
            </Context.Provider>
        </div>
    );
};

export default MainLayout;
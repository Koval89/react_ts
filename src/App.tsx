import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {postService} from "./services/api.service";
import {IPostModel} from "./model/IPostModel";




const App: FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])

    const lift = async (id:number) => {
        setPosts((await postService.getPostOFUsers(id)))
        console.log(id)
    }

    return (
        <div>
            <hr/>
            <Posts posts={posts}/>
            <hr/>
            <Users lift={lift}/>
        </div>
    );
}

export default App;

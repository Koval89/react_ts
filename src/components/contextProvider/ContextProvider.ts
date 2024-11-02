import {createContext} from "react";
import {IPostsModel} from "../../models/IPostsModel";
import {ICommentsModel} from "../../models/ICommentsModel";
import {IUsersModel} from "../../models/IUsersModel";

interface ContextProps{
    users:IUsersModel[],
    posts:IPostsModel[],
    comments:ICommentsModel[]
}

export let MyContext = createContext<ContextProps | undefined>(undefined)

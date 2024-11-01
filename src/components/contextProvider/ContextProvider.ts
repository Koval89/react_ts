import {createContext} from "react";
import {IPostsModel} from "../../models/IPostsModel";
import {ICommentsModel} from "../../models/ICommentsModel";

type StoreType = {
    postsSlice: {
        allPosts: IPostsModel[],
        post:null
    },
    commentsSlice:{
        allComments:ICommentsModel[],
        comment:null
    }
}

export let defaultStorageValue: StoreType = {
    postsSlice: {
        allPosts: [],
        post:null
    },
    commentsSlice:{
        allComments:[],
        comment:null
    }
}

export let Context = createContext<StoreType>(defaultStorageValue)

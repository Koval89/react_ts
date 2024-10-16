import axios from "axios";
import {IUserModel} from "../model/IUserModel";
import {IResponseUsersModel} from "../model/IResponseUsersModel";
import {IPostModel} from "../model/IPostModel";
import {IPostsModel} from "../model/IPostsModel";

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com'
})

export const userService = {
    getUsers: async (): Promise<IUserModel[]>=>{
        return (await axiosInstance.get<IResponseUsersModel>('/users')).data.users


}
}
export const postService = {
    getPostOFUsers: async (id:number):Promise<IPostModel[]>=>{
        let axiosResponce = await axiosInstance.get<IPostsModel>('/posts/user/'+id)
        return axiosResponce.data.posts
        
    }
}
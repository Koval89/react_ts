import axios from "axios";
import {IUsersModel} from "../models/IUsersModel";
import {IPostsModel} from "../models/IPostsModel";
import {ICommentsModel} from "../models/ICommentsModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getUsers = async (): Promise<IUsersModel[]> => {
    let axiosResponce = await axiosInstance.get<IUsersModel[]>('/users')
    return axiosResponce.data
}

export const getPosts = async (): Promise<IPostsModel[]> => {
    let axiosResponce = await axiosInstance.get<IPostsModel[]>('/posts')
    return axiosResponce.data
}

export const getComments = async (): Promise<ICommentsModel[]> => {
    let axiosResponce = await axiosInstance.get<ICommentsModel[]>('/comments')
    return axiosResponce.data
}

import axios from "axios";
import {IUsersModel} from "../models/IUsersModel";
import {IPostsModel} from "../models/IPostsModel";
import {ICommentsModel} from "../models/ICommentsModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getUsers = () => axiosInstance.get<IUsersModel[]>('/users');
export const getPosts = () => axiosInstance.get<IPostsModel[]>('/posts');
export const getComments = () => axiosInstance.get<ICommentsModel[]>('/comments')

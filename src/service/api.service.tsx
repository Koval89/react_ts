import axios from "axios";
import {IUsers} from '../model/IUsers'
import {IPosts} from "../model/IPosts";
import {IComments} from "../model/IComments";



const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getUsers = async (): Promise<IUsers[]> => {
    let axiosResponse = await axiosInstance.get<IUsers[]>('/users')
    return axiosResponse.data
}
export const getPosts = async ():Promise<IPosts[]> => {
    const {data} = await axiosInstance.get<IPosts[]>('/posts')
    return data
}
export const getPostOfUser = async (user:IUsers) => {
    let axiosResponse = await axiosInstance.get<IPosts[]>('/posts',  {
        params:{userId:user.id}
    })
    return axiosResponse.data
}
export const getComments = async () =>{
    const {data} = await axiosInstance.get<IComments[]>('/comments')
    return data
}

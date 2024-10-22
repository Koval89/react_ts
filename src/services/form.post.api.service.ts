import axios from "axios";
import {IPostModel} from "../models/IPostModel";


const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{"Content-Type":"application/json"}
})

const  postConst:string='/posts'

export const newPost = async (newPost:IPostModel):Promise<IPostModel>=>{
    return (await axiosInstance.post<IPostModel>(postConst, newPost)).data;
}


import {IPostModel} from "./IPostModel";

export interface IPostsModel{
    posts: IPostModel[],
    skip: number,
    limit: number,
    total: number

}

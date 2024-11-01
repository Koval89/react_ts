import {IPostsModel} from "./IPostsModel";
import {ICommentsModel} from "./ICommentsModel";

export default interface IPostsWithCommentsModel extends IPostsModel{
    comments:ICommentsModel[]
}
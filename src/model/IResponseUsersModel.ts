import {IUserModel} from "./IUserModel";

export interface IResponseUsersModel {
    users: IUserModel[],
    total: number,
    skip: number,
    limit: number,
}
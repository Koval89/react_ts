import {FC, PropsWithChildren, useContext, useEffect, useState} from "react";
import {IUsersModel} from "../../models/IUsersModel";
import {IPostsModel} from "../../models/IPostsModel";
import {ICommentsModel} from "../../models/ICommentsModel";
import {getComments, getPosts, getUsers} from "../../service/api.service";
import {MyContext} from "./ContextProvider";

export const ContextProvider: FC<PropsWithChildren<{}>> = ({children}) => {
    const [users, setUsers] = useState<IUsersModel[]>([])
    const [posts, setPosts] = useState<IPostsModel[]>([])
    const [comments, setComments] = useState<ICommentsModel[]>([])
    useEffect(() => {
        const getAllUsersPosstsComments = async () => {
            const usersResponce = await getUsers()
            const postsResponce = await getPosts()
            const commentsResponce = await getComments()
            setUsers(usersResponce.data)
            setPosts(postsResponce.data)
            setComments(commentsResponce.data)
        }
        getAllUsersPosstsComments()
    }, []);
    return (
        <MyContext.Provider value={{users,posts,comments}}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("fail")
    }
    console.log(context)
    return context

}
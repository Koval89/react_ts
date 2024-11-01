import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostsWithCommentsPage from "../pages/PostsWithCommentsPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {index:true, element:<HomePage/>},
            {path:'Users', element:<UsersPage/>},
            {path:'Posts', element:<PostsPage/>},
            {path:'Comments', element:<CommentsPage/>},
            {path:'PostsWithComments', element:<PostsWithCommentsPage/>}
        ]
    }
])
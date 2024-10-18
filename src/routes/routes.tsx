import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import Posts from "../pages/Posts";
import Comments from "../pages/Comments";
import Users from "../pages/Users";
import HomePage from "../pages/HomePage";




export const routes = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
            {
                index:true, element:<HomePage/>
            },
            {
                path:'Users', element:<Users/>
            },
            {
                path:'Posts', element:<Posts/>
            },
            {
                path:'Comments', element:<Comments/>
            }
        ]}
])
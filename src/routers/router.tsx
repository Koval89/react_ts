import {createBrowserRouter} from "react-router-dom";
import PostFormComponent from "../components/PostFormComponent";

export const router = createBrowserRouter([
    {
        index:true,
        element:<PostFormComponent/>
    }
])
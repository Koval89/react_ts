import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";
import {ContextProvider} from "../components/contextProvider/MyContext";



const MainLayout = () => {



    return (
        <div>
            <ContextProvider>
                <Menu/>
                <Outlet/>
            </ContextProvider>

        </div>
    );
};

export default MainLayout;
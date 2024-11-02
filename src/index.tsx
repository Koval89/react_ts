import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";
import {ContextProvider} from "./components/contextProvider/MyContext";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

<RouterProvider router={router}/>

);




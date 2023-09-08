import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,createBrowserRouter,RouterProvider} from "react-router-dom";

import './index.css';

// createBrowserRouter([])
const routes = [
    {path:"/",element:<div>Home Page</div>},
    {path:"/profile",element:<div>Profile</div>},
    {path:"*",element:<div>404:Not found</div>}
]
const router =createBrowserRouter(routes)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

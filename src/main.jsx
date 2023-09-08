import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import './index.css';
import App from "./App";

// createBrowserRouter([])
const routes = [
    {path:"/",element:<div>Home Page</div>},
    {path:"/profile",element:<div>Profile</div>},
    {path:"/profile/:id",element:<div>profile id</div>},
    {path:"*",element:<div>404:Not found</div>}
]
const router =createBrowserRouter(routes)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router}/>
  <App/>
)

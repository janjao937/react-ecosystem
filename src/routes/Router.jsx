import {createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from "../Page/HomePage";
import ProfilePage from "../Page/ProfilePage";
import FriendPage from "../Page/FriendPage";

const Router=()=>{
   
    const router = createBrowserRouter([
        {path:"/",element:<HomePage/>},
        {path:"/profile",element:<ProfilePage/>},
        {path:"/profile/:id",element:<FriendPage/>},
        {path:"*",element:<div>404:Not found</div>}
    ]);

    return <RouterProvider router={router}/>
}

export default Router;
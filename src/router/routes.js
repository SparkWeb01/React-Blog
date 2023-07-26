import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path:'/about', element: About },
    {path:'/posts', element: Posts },
    {path:'/posts/:id', element: PostIdPages},
]
export const publicRoutes = [
    {path:'/login', element: Login },

]
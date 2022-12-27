import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import Media from "../components/Media";
import Message from "../components/Message";
import Main from "./Main";

export const router  =  createBrowserRouter([
    {
        path:'',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/media',
                element:<Media/>
            },
            {
                path:'/message',
                element:<Message/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/signin',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Register/>
            },
        ]
    }
]);
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Visit from "../pages/Visit";
import Project from "../pages/Project";
import Expo from "../pages/Expo";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/Data/Service.json')
            },
            {
                path: '/visit/:id',
                element: <Visit></Visit>,
                loader: ()=>fetch('/Data/Service.json')
            },
            {
                path: '/project',
                element: <Project></Project>
            },
            {
                path: '/expo',
                element: <Expo></Expo>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },   
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])

export default routes;


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
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/Data/Service.json')
            },
            {
                path: '/service/:id',
                element: <Visit></Visit>,
                loader: ()=> fetch('/Data/Service.json')
            },
            {
                path: '/expo',
                element: <Expo></Expo>,
                loader: ()=> fetch('/Data/Service.json')
            },
            {
                path: '/project',
                element: <Project></Project>                
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


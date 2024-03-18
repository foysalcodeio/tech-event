import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Visit from "../pages/Visit";
import Project from "../pages/Project";
import Expo from "../pages/Expo";
import Login from "../pages/Login";
import Register from "../pages/Register";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/visit',
                element: <Visit></Visit>
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
        ]
    }
])

export default routes;


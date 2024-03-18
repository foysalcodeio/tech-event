import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import router from './routes/routes'
import AuthProvider from "./Provider/AuthProvider";


import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
    <RouterProvider router={router}>
        <Root />
    </RouterProvider>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
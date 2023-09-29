import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css"
import { Login } from "./Components/Login";
import { RentalComponent } from "./Components/RentalComponent";
import { MyProperty } from "./Components/MyProperties";
import { SignUp } from "./Components/SignUp";

const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {path:"/signup", element:<SignUp/>},
    {path:"/", element:<Home/>},
    {path:"/rental", element:<RentalComponent/>},
    {path:"/myProperties", element:<MyProperty/>}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
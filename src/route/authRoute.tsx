import { Route } from "@tanstack/react-location";
import React from "react";
import { LoginPage } from "ui/page/login";
import { RegisterPage } from "ui/page/register";

export const authRoute: Route[] = [
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
];

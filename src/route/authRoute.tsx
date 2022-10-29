import { Route } from "@tanstack/react-location";
import React from "react";
// import { SocondSamplePage } from "ui/page/second";
import { AuthPage } from "ui/page/auth";

export const authRoute: Route[] = [
    {
        path: "/login",
        element: <AuthPage />,
    },
    // {
    //     path: "/resigter",
    //     element: <SocondSamplePage />,
    // },
];

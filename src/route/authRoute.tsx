import { Route } from "@tanstack/react-location";
import React from "react";
// import { SocondSamplePage } from "ui/page/second";
import { LoginPage } from "ui/page/login";

export const authRoute: Route[] = [
    {
        path: "/login",
        element: <LoginPage />,
    },
    // {
    //     path: "/resigter",
    //     element: <SocondSamplePage />,
    // },
];

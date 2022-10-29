import { ReactLocation, Route } from "@tanstack/react-location";
import { history } from "./history";
import { authRoute } from "route/authRoute";
import React from "react";
import { TopPage } from "ui/page/top";
import { checkoutRoute } from "./checkout";

const indexRoute: Route[] = [
    {
        path: "/",
        element: <TopPage />,
    },
    {
        path: "/top",
        element: <TopPage />,
    },
];

export const routes: Route[] = [authRoute, checkoutRoute].reduce(
    (prevRoute, currRoute) => prevRoute.concat(currRoute),
    indexRoute
);

export const location = new ReactLocation({ history: history });

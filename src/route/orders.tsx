import { Route } from "@tanstack/react-location";
import React from "react";
import { OrdersPage } from "ui/page/orders";

export const ordersRoute: Route[] = [
    {
        path: "/orders",
        element: <OrdersPage />,
    },
    // {
    //     path: "/resigter",
    //     element: <SocondSamplePage />,
    // },
];

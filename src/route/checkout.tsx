import { Route } from "@tanstack/react-location";
import React from "react";
// import { SocondSamplePage } from "ui/page/second";
import { CheckoutPage } from "ui/page/checkout";

export const checkoutRoute: Route[] = [
    {
        path: "/checkout",
        element: <CheckoutPage />,
    },
    // {
    //     path: "/resigter",
    //     element: <SocondSamplePage />,
    // },
];

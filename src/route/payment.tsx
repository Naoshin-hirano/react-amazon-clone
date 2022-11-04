import { Route } from "@tanstack/react-location";
import React from "react";
import { PaymentPage } from "ui/page/payment";

export const paymentRoute: Route[] = [
    {
        path: "/payment",
        element: <PaymentPage />,
    },
    // {
    //     path: "/resigter",
    //     element: <SocondSamplePage />,
    // },
];

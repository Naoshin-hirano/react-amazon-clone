import React from "react";
import { Template } from "ui/component/template/orders";
import { useCreateProps } from "./presentation";

export const OrdersPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};

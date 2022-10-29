import React from "react";
import { Template } from "ui/component/template/checkout";
import { useCreateProps } from "./presentation";

export const CheckoutPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};

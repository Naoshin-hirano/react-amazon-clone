import React from "react";
import { Template } from "ui/component/template/payment";
import { useCreateProps } from "./presentation";

export const PaymentPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};

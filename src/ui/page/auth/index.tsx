import React from "react";
import { Template } from "ui/component/template/auth";
import { useCreateProps } from "./presentation";

export const AuthPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};

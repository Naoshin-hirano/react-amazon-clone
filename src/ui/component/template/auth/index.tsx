import React from "react";
import { Login } from "ui/component/organism/auth/login";

export const Template: React.FC<any> = (props) => {
    return (
        <div>
            <Login {...props} />
        </div>
    );
};

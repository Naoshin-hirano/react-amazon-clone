import React from "react";
import { Checkout } from "ui/component/organism/checkout";
import { Header } from "ui/component/organism/common/header";

export const Template: React.FC<any> = (props) => {
    return (
        <div>
            <Header />
            <Checkout {...props} />
        </div>
    );
};

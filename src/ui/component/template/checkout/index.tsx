import React from "react";
import { Checkout } from "ui/component/organism/checkout/checkout";

export const Template: React.FC<any> = (props) => {
    return (
        <div>
            <Checkout {...props} />
        </div>
    );
};

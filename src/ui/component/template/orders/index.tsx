import React from "react";
import { Orders } from "ui/component/organism/orders";

export const Template: React.FC<any> = (props) => {
    return (
        <div>
            <Orders {...props} />
        </div>
    );
};

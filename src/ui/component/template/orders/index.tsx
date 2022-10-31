import React from "react";
import { Header } from "ui/component/organism/common/header";
import { Orders } from "ui/component/organism/orders";

export const Template: React.FC<any> = (props) => {
    return (
        <div>
            <Header />
            <Orders {...props} />
        </div>
    );
};

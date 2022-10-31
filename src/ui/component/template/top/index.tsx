import React from "react";
import { Header } from "ui/component/organism/common/header";
import { Top } from "ui/component/organism/top";

export const Template: React.FC<any> = (props) => {
    return (
        <div>
            <Header />
            <Top {...props} />
        </div>
    );
};

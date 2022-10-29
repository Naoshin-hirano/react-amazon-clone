import React from "react";
import { Top } from "ui/component/organism/top";

export const Template: React.FC<any> = (props) => {
    return (
        <div>
            <Top {...props} />
        </div>
    );
};

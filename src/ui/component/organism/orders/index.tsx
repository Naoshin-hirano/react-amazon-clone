import React from "react";
import "../../../../design/component/atoms/orders/index.css";
import { Order } from "./order";

export const Orders: React.FC<any> = (props) => {
    const { orders } = props;
    return (
        <div className="orders">
            <h1> Your Orders</h1>
            <div className="orders__order">
                {orders?.map((order: any, key: any) => (
                    <Order order={order} key={key} />
                ))}
            </div>
        </div>
    );
};

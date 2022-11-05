import React from "react";
import "../../../../design/component/atoms/orders/order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import { CheckoutProduct } from "../common/checkout-product";

export const Order = (props: any) => {
    const { order } = props;
    return (
        <div className="order">
            <h2>注文</h2>
            <p>{moment.unix(order.data.created).format("YYYY-MM-DD")}</p>
            <p className="order__id">
                <small>注文ID: {order.id}</small>
            </p>
            {order.data.basket?.map((item: any, key: any) => (
                <CheckoutProduct
                    key={key}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}

            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">合計:{value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"¥"}
            />
        </div>
    );
};

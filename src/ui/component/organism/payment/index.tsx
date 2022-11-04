import React from "react";
import "../../../../design/component/atoms/payment/index.css";
import { Link, useLocation } from "@tanstack/react-location";
import { CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { CheckoutProduct } from "../common/checkout-product";

// 決済には@stripe/react-stripe-jsを使用
export const Payment: React.FC<any> = (props) => {
    const { basket } = props;
    const { history } = useLocation();

    const handleSubmit = () => {
        // 支払い処理 → 支払い完了後に/orders画面へ遷移
        console.log("支払い処理");
        history.push("/orders");
    };

    const handleChange = () => {};
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>xxxx@yyyy.com</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item: any, key: any) => (
                            <CheckoutProduct
                                key={key}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value="77,555"
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                {/* 処理中または処理完了時は非活性 */}
                                <button>
                                    <span>Buy Now</span>
                                </button>
                            </div>

                            {/* {error && <div>{error}</div>} */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

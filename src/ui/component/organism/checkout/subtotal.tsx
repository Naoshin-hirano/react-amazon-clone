import React from "react";
import "../../../../design/component/atoms/checkout/subtotal.css";
import CurrencyFormat from "react-currency-format";

export const Subtotal: React.FC<any> = ({ basket }) => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):{" "}
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value="76,000"
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {/* 支払い画面へ遷移 */}
            <button>Proceed to Checkout</button>
        </div>
    );
};

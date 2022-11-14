import React from "react";
import "../../../../design/component/atoms/checkout/subtotal.css";
import CurrencyFormat from "react-currency-format";

export const Subtotal = ({ busketInfo }: any) => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            小計 ({busketInfo.productInCart?.length - 1}{" "}
                            個の商品):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            ギフトに設定（贈り主の氏名を表示）
                        </small>
                    </>
                )}
                decimalScale={2}
                value={busketInfo.currentTotalAmount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"¥"}
            />
            {/* 支払い画面へ遷移 */}
            <button>レジに進む</button>
        </div>
    );
};

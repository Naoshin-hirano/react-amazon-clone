import React from "react";
import "../../../../design/component/atoms/checkout/index.css";
import { Subtotal } from "./subtotal";
import { CheckoutProduct } from "../common/checkout-product";
import { CartProduct } from "core/store/ui/top/type";

export const Checkout: React.FC<any> = (props) => {
    const { busketInfo } = props;
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkout component ad banner"
                />

                <div>
                    <h3>平野直弥さん</h3>
                    <h2 className="checkout__title">カート内の商品</h2>

                    {busketInfo.productInCart ? (
                        busketInfo.productInCart.map(
                            (item: CartProduct, key: string) => (
                                <CheckoutProduct
                                    key={key}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            )
                        )
                    ) : (
                        <>商品が存在しません</>
                    )}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal busketInfo={busketInfo} />
            </div>
        </div>
    );
};

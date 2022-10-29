import React from "react";
import "../../../../design/component/atoms/checkout/checkout.css";
import { Subtotal } from "./subtotal";
import { CheckoutProduct } from "./checkout-product";

export const Checkout: React.FC<any> = (props) => {
    const { basket } = props;
    // pagesのstoreからuseSelectorで取得したデータをpropsで取得
    // const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkout component ad banner"
                />

                <div>
                    <h3>Hello xxx@yyy.com</h3>
                    <h2 className="checkout__title">Your shopping basket</h2>

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

            <div className="checkout__right">
                <Subtotal backet={basket} />
            </div>
        </div>
    );
};

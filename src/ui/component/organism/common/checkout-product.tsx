import React from "react";
import "../../../../design/component/atoms/checkout/checkout-product.css";

export const CheckoutProduct: React.FC<any> = ({
    id,
    image,
    title,
    price,
    rating,
    hideButton,
}) => {
    // const removeFromBasket = () => {
    //     dispatch({
    //         type: "REMOVE_FROM_BASKET",
    //         id: id,
    //     });
    // };
    console.log("checkoutId", id);
    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct__image"
                src={image}
                alt="checkoutProductImg"
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>¥</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill(undefined)
                        .map((_, key: any) => (
                            <p key={key}>🌟</p>
                        ))}
                </div>
                {!hideButton && <button>カートから削除</button>}
            </div>
        </div>
    );
};

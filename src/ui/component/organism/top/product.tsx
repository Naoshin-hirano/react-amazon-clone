import React from "react";
import "../../../../design/component/atoms/top/product.css";

export const Product: React.FC<any> = ({
    id,
    title,
    price,
    rating,
    image,
    addToBasket,
}: any) => {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p>{id}</p>
                <p className="product__price">
                    <small>¥</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill(undefined)
                        .map((_, key) => (
                            <p key={key}>🌟</p>
                        ))}
                </div>
            </div>
            <div className="product__rating"></div>

            <img src={image} alt="The Lean Startup book cover" />

            <button
                onClick={() =>
                    addToBasket({
                        id,
                        title,
                        image,
                        price,
                        rating,
                    })
                }
            >
                カートへ
            </button>
        </div>
    );
};

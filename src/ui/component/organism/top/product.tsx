import React from "react";
import "../../../../design/component/atoms/top/product.css";

export const Product: React.FC<any> = ({ id, title, image, price, rating }) => {
    // const addToBasket = () => {
    //     //dispatch item to the data layer
    //     dispatch({
    //         type: "ADD_TO_BASKET",
    //         item: {
    //             id,
    //             title,
    //             image,
    //             price,
    //             rating,
    //         },
    //     });
    // };
    console.log("id", id);
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
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

            <button>カートへ</button>
        </div>
    );
};

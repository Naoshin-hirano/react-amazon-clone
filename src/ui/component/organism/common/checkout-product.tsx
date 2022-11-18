import { dispatch } from "core/store";
import { UITopAction } from "core/store/ui/top/actions";
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
    const removeFromBasket = (id: string) => {
        // clickした商品データをstoreの「カート内商品一覧」に追加保存
        dispatch(UITopAction.deleteProductInCartAction(id));
        // clickした商品の金額をstoreの「現在の合計金額」に追加保存
        dispatch(UITopAction.deleteCurrentTotalAmountAction(price));
        // storeの「現在の商品個数」カウンターに＋1追加保存
        dispatch(UITopAction.deleteCurrentProductNumAction());
    };

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
                {!hideButton && (
                    <button onClick={() => removeFromBasket(id)}>
                        カートから削除
                    </button>
                )}
            </div>
        </div>
    );
};

import { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, UITop } from "./type";

export const initialState = {
    productInCart: [
        {
            id: "",
            title: "",
            image: "",
            price: 0,
            rating: 0,
        },
    ],
    currentTotalAmount: 0,
    currentProductNum: 0,
};

export const reducers = {
    // カート商品追加
    updateProductInCartAction: (
        _state: UITop,
        action: PayloadAction<CartProduct>
    ) => ({
        ..._state,
        productInCart: [..._state.productInCart, action.payload],
    }),
    updateCurrentTotalAmountAction: (
        _state: UITop,
        action: PayloadAction<number>
    ) => ({
        ..._state,
        currentTotalAmount: _state.currentTotalAmount + action.payload,
    }),
    updateCurrentProductNumAction: (_state: UITop) => ({
        ..._state,
        currentProductNum: _state.currentProductNum + 1,
    }),
    // カート商品削除
    deleteProductInCartAction: (
        _state: UITop,
        action: PayloadAction<string>
    ) => ({
        ..._state,
        productInCart: [..._state.productInCart].filter(
            (product) => product.id !== action.payload
        ),
    }),
    deleteCurrentTotalAmountAction: (
        _state: UITop,
        action: PayloadAction<number>
    ) => ({
        ..._state,
        currentTotalAmount: _state.currentTotalAmount - action.payload,
    }),
    deleteCurrentProductNumAction: (_state: UITop) => ({
        ..._state,
        currentProductNum: _state.currentProductNum - 1,
    }),
};

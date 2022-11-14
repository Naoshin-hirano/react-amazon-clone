import { render } from "@testing-library/react";
import React from "react";
import { Router } from "@tanstack/react-location";
import { location, routes } from "../../../../../route";
import { CheckoutPage } from "ui/page/checkout";
import { useSelector } from "react-redux";

jest.mock("react-redux");
const useSelectorMock = useSelector as jest.Mock;
const dummyStore = {
    productInCart: [
        {
            id: "テスト1",
            title: "テスト1",
            image: "テスト1",
            price: 999,
            rating: 5,
        },
        {
            id: "テスト2",
            title: "テスト2",
            image: "テスト2",
            price: 888,
            rating: 5,
        },
    ],
    currentTotalAmount: 9999,
    currentProductNum: 9,
};

beforeEach(() => {
    useSelectorMock.mockImplementation((selector) => selector(dummyStore));
});

describe("CheckoutPage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Checkout画面 snapshot確認", async () => {
        const { asFragment } = render(
            <Router routes={routes} location={location}>
                <CheckoutPage />
            </Router>
        );
        expect(asFragment()).toMatchSnapshot("CheckoutPage");
    });
});

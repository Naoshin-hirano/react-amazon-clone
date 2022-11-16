import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Product } from "ui/component/organism/top/product";
import * as Store from "core/store";

const mockHistoryPush = jest.fn();
const addToBasket = jest.fn();
const dispatchSpy = jest.spyOn(Store, "dispatch");

jest.mock("@tanstack/react-location", () => {
    return {
        ...jest.requireActual("@tanstack/react-location"),
        useLocation: () => ({
            history: {
                push: mockHistoryPush,
            },
        }),
    };
});

describe("Header Unit Test", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Topコンポーネント snapshotテスト", async () => {
        const { asFragment } = render(
            <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={1196}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                addToBasket={addToBasket}
            />
        );
        expect(asFragment()).toMatchSnapshot("Product");
    });

    it("カートへボタン押下", async () => {
        const wrapper = render(
            <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={1196}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                addToBasket={addToBasket}
            />
        );
        await act(async () => {
            const buttonName = wrapper.getByText("カートへ");
            await fireEvent.click(buttonName);
        });
        expect(dispatchSpy).toHaveBeenCalledTimes(0);
        expect(mockHistoryPush).toHaveBeenCalledTimes(0);
    });
});

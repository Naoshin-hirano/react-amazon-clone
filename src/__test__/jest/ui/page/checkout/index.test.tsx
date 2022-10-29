import { render } from "@testing-library/react";
import React from "react";
import { CheckoutPage } from "ui/page/checkout";

describe("Checkout", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Checkout画面 snapshot確認", async () => {
        const { asFragment } = render(<CheckoutPage />);
        expect(asFragment()).toMatchSnapshot("Checkout");
    });
});

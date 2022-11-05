import { render } from "@testing-library/react";
import React from "react";
import { Router } from "@tanstack/react-location";
import { location, routes } from "../../../../../route";
import { CheckoutPage } from "ui/page/checkout";

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

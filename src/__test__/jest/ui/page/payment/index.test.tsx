import { render } from "@testing-library/react";
import React from "react";
import { Router } from "@tanstack/react-location";
import { location, routes } from "../../../../../route";
import { PaymentPage } from "ui/page/payment";

describe("PaymentPage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("PaymentPage画面 snapshot確認", async () => {
        const { asFragment } = render(
            <Router routes={routes} location={location}>
                <PaymentPage />
            </Router>
        );
        expect(asFragment()).toMatchSnapshot("PaymentPage");
    });
});

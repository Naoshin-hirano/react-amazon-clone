import { render } from "@testing-library/react";
import React from "react";
import { Router } from "@tanstack/react-location";
import { location, routes } from "../../../../../route";
import { OrdersPage } from "ui/page/orders";

describe("OrdersPage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("TopPage画面 snapshot確認", async () => {
        const { asFragment } = render(
            <Router routes={routes} location={location}>
                <OrdersPage />
            </Router>
        );
        expect(asFragment()).toMatchSnapshot("OrdersPage");
    });
});

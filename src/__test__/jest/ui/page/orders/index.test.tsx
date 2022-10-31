import { render } from "@testing-library/react";
import React from "react";
import { OrdersPage } from "ui/page/orders";

describe("OrdersPage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("TopPage画面 snapshot確認", async () => {
        const { asFragment } = render(<OrdersPage />);
        expect(asFragment()).toMatchSnapshot("OrdersPage");
    });
});

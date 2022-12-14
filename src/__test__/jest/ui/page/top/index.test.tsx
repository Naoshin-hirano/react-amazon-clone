import { render } from "@testing-library/react";
import React from "react";
import { Router } from "@tanstack/react-location";
import { location, routes } from "../../../../../route";
import { TopPage } from "ui/page/top";

describe("TopPage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("TopPage画面 snapshot確認", async () => {
        const { asFragment } = render(
            <Router routes={routes} location={location}>
                <TopPage />
            </Router>
        );
        expect(asFragment()).toMatchSnapshot("TopPage");
    });
});

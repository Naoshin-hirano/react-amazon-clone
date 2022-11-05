import { render } from "@testing-library/react";
import React from "react";
import { Router } from "@tanstack/react-location";
import { location, routes } from "../../../../../route";
import { LoginPage } from "ui/page/login";

describe("LoginPage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Login画面 snapshot確認", async () => {
        const { asFragment } = render(
            <Router routes={routes} location={location}>
                <LoginPage />
            </Router>
        );
        expect(asFragment()).toMatchSnapshot("LoginPage");
    });
});

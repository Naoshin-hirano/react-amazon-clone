import { render } from "@testing-library/react";
import React from "react";
import { Router } from "@tanstack/react-location";
import { location, routes } from "../../../../../route";
import { RegisterPage } from "ui/page/register";

describe("RegisterPage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Register画面 snapshot確認", async () => {
        const { asFragment } = render(
            <Router routes={routes} location={location}>
                <RegisterPage />
            </Router>
        );
        expect(asFragment()).toMatchSnapshot("RegisterPage");
    });
});

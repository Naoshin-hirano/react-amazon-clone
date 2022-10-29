import { render } from "@testing-library/react";
import React from "react";
import { LoginPage } from "ui/page/login";

describe("LoginPage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Login画面 snapshot確認", async () => {
        const { asFragment } = render(<LoginPage />);
        expect(asFragment()).toMatchSnapshot("LoginPage");
    });
});

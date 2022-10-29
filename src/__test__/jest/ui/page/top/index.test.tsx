import { render } from "@testing-library/react";
import React from "react";
import { TopPage } from "ui/page/top";

describe("TopPage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("TopPage画面 snapshot確認", async () => {
        const { asFragment } = render(<TopPage />);
        expect(asFragment()).toMatchSnapshot("TopPage");
    });
});

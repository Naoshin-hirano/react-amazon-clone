import { render } from "@testing-library/react";
import React from "react";
import { Header } from "ui/component/organism/common/header";

describe("Header Unit Test", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Headerコンポーネント snapshot確認", async () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot("Header");
    });
});

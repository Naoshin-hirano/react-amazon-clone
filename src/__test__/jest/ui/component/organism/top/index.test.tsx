import { render } from "@testing-library/react";
import React from "react";
import { Top } from "ui/component/organism/top";
// import * as Store from "core/store";

const mockHistoryPush = jest.fn();
// const dispatchSpy = jest.spyOn(Store, "dispatch");

jest.mock("@tanstack/react-location", () => {
    return {
        ...jest.requireActual("@tanstack/react-location"),
        useLocation: () => ({
            history: {
                push: mockHistoryPush,
            },
        }),
    };
});

describe("Header Unit Test", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    type TopTitle = {
        title: string;
    };

    const topTitle: TopTitle = {
        title: "トップタイトル",
    };

    it("カートへボタン押下", async () => {
        const { asFragment } = render(<Top topTitle={topTitle} />);
        expect(asFragment()).toMatchSnapshot("Top");
    });

    // it("カートへボタン押下", async () => {
    //     const wrapper = render(<Top topTitle={topTitle} />);
    //     await act(async () => {
    //         const buttonName = await wrapper.getByText(/カートへ/);
    //         await fireEvent.click(buttonName);
    //     });
    //     expect(dispatchSpy).toHaveBeenCalledTimes(0);
    //     expect(mockHistoryPush).toHaveBeenCalledTimes(0);
    // });
});

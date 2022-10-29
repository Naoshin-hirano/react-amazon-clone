import { render } from "@testing-library/react";
import React from "react";
import { Login } from "ui/component/organism/auth/login";

describe("Login", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // propsのモック
    const LoginPropsMock = {
        firstTitle: {
            title: "Firstタイトル",
        },
        firstMenu: {
            buttonLabels: {
                menu1: "Firstメニュー1",
                menu2: "Firstメニュー2",
                menu3: "Firstメニュー3",
            },
        },
        backButton: {
            buttonLabels: {
                back: "閉じる",
            },
        },
    };

    it("Login画面 snapshot確認", async () => {
        const { asFragment } = render(<Login {...LoginPropsMock} />);
        expect(asFragment()).toMatchSnapshot("Login");
    });
});

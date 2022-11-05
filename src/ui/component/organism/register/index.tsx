import React from "react";
import "../../../../design/component/atoms/auth/register.css";
import { Link } from "@tanstack/react-location";

export const Register: React.FC<any> = (props) => {
    const { firstTitle } = props;
    console.log(firstTitle);

    return (
        <div className="register">
            <Link to="/">
                <img
                    alt="Amazon_logo"
                    className="register__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>
            <div className="register__container">
                <h1>新規登録</h1>
                <form>
                    <h5>メール</h5>
                    <input type="text" />

                    <h5>パスワード</h5>
                    <input type="password" />

                    <h5>パスワード（確認）</h5>
                    <input type="password" />

                    <button className="register_signInButton">新規登録</button>
                </form>

                <p>
                    登録することにより、Amazon FAKE CLONE's
                    に同意したことになります
                    使用および販売条件。当社のプライバシー通知を参照するか、
                    Cookies Notice および当社のインタレスト
                    ベース広告に関する通知。
                </p>

                <button className="register__registerButton">
                    Amazon Accountでログイン
                </button>
            </div>
        </div>
    );
};

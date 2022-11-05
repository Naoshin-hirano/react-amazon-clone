import React from "react";
import "../../../../design/component/atoms/auth/login.css";
import { Link } from "@tanstack/react-location";

export const Login: React.FC<any> = (props) => {
    const { firstTitle } = props;
    console.log(firstTitle);

    return (
        <div className="login">
            <Link to="/">
                <img
                    alt="Amazon_logo"
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>
            <div className="login__container">
                <h1>ログイン</h1>
                <form>
                    <h5>メール</h5>
                    <input type="text" />

                    <h5>パスワード</h5>
                    <input type="password" />

                    <button className="login_signInButton">ログイン</button>
                </form>

                <p>
                    サインインすることにより、Amazon FAKE CLONE
                    の条件に同意したことになります
                    使用と販売。当社のプライバシーに関する通知または Cookie
                    に関する通知をご覧ください。 およびインタレスト
                    ベース広告の通知。
                </p>

                <button className="login__registerButton">
                    Amazon Accountを作成する
                </button>
            </div>
        </div>
    );
};

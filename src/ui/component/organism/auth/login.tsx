import React from "react";
import "../../../../design/component/atoms/auth/Login.css";
import { Link, MemoryRouter } from "react-router-dom";

export const Login: React.FC<any> = (props) => {
    const { firstTitle } = props;
    console.log(firstTitle);

    return (
        <div className="login">
            <MemoryRouter>
                <Link to="/">
                    <img
                        className="login__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    />
                </Link>
            </MemoryRouter>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className="login_signInButton">Sign In</button>
                </form>

                <p>
                    By signing in you agree to Amazon FAKE CLONE's Conditions of
                    Use & Sale. Please see our Privacy Notice, or Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
};

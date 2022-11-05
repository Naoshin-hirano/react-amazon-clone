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
                <h1>Register</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <h5>Confirm Password</h5>
                    <input type="password" />

                    <button className="register_signInButton">Register</button>
                </form>

                <p>
                    By register with your agree to Amazon FAKE CLONE's
                    Conditions of Use & Sale. Please see our Privacy Notice, or
                    Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="register__registerButton">
                    Sign in with your Amazon Account
                </button>
            </div>
        </div>
    );
};

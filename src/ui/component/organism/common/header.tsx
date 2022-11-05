import React from "react";
import "../../../../design/component/atoms/common/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "@tanstack/react-location";

export const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon logo"
                />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            平野直弥さん
                        </span>
                        <span className="header__optionLineTwo">ログイン</span>
                    </div>
                </Link>

                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            返品もこちら
                        </span>
                        <span className="header__optionLineTwo">注文履歴</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">あなたの</span>
                    <span className="header__optionLineTwo">アカウント</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            3
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

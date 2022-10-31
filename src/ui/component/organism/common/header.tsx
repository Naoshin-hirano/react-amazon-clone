import React from "react";
import "../../../../design/component/atoms/common/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, MemoryRouter } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <MemoryRouter>
                <Link to="/">
                    <img
                        className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt="Amazon logo"
                    />
                </Link>
            </MemoryRouter>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <MemoryRouter>
                    <Link to="/login">
                        <div className="header__option">
                            <span className="header__optionLineOne">
                                Hello xxxx@yyyy.com
                            </span>
                            <span className="header__optionLineTwo">
                                Sign In
                            </span>
                        </div>
                    </Link>

                    <Link to="/orders">
                        <div className="header__option">
                            <span className="header__optionLineOne">
                                Returns
                            </span>
                            <span className="header__optionLineTwo">
                                & Orders
                            </span>
                        </div>
                    </Link>

                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>

                    <Link to="/checkout">
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className="header__optionLineTwo header__basketCount">
                                3
                            </span>
                        </div>
                    </Link>
                </MemoryRouter>
            </div>
        </div>
    );
};

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../features/filters/filtersSlice";

import logo from "../../assets/logo.svg";
import search_icon from "../../assets/Search.svg";
import favorites_icon from "../../assets/mdi_heart.svg";
import reserved_icon from "../../assets/solar_cart-bold.svg";
import hero_profile from "../../assets/heroicons-solid_user.svg";

import "./Header.css";

function Header() {

    const favoritesCount = useSelector((state) => state.favorites.items.length);
    const reservedCount = useSelector((state) => state.reserved.items.length);

    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.filters.search);

    function handleSearchChange(event) {
        dispatch(setFilter({ name: "search", value: event.target.value }));
    }

    return (
        <header className="header">
            <div className="header__container">

                <Link to={"/products"} className="header__logo">
                    <span className="header__logo-icon">
                         <img src={logo} alt="2nd hand market logo" />
                    </span>

                    <span className="header__logo-text">
                        <span className="header__logo-line">2ND</span>
                        <span className="header__logo-line">HAND</span>
                        <span className="header__logo-line">MARKET</span>
                    </span>
                </Link>

                <div className="header__search">
                    <div className="header__search-bar">
                        <span className="header__search-bar-icon">
                            <img src={search_icon} alt="search icon" />
                        </span>
                        <input
                            className="header__search-input"
                            type="text"
                            value={searchValue}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>

                <div className="header__links">
                    <Link to="/products" className="header__link">
                        <div className="header__link-text">
                            About us
                        </div>
                    </Link>

                    <Link to="/products" className="header__link">
                        <div className="header__link-text">
                            All shops
                        </div>
                    </Link>

                    <Link to="/products" className="header__link">
                        <div className="header__link-text">
                            Become a merchant
                        </div>
                    </Link>
                </div>

                <div className="header__icons">
                    <Link to="/favorites" className="header__icon-link" aria-label="Favorites">
                        <img src={favorites_icon} alt="Favorites" className="header__icon-image" />
                        <span className="header__icon-count">{favoritesCount}</span>
                    </Link>

                    <Link to="/reserved" className="header__icon-link" aria-label="Reserved">
                        <img src={reserved_icon} alt="Reserved" className="header__icon-image" />
                        <span className="header__icon-count">{reservedCount}</span>
                    </Link>

                    <Link to="/login" className="header__icon-link" aria-label="Profile">
                        <img src={hero_profile} alt="Profile" className="header__icon-image" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
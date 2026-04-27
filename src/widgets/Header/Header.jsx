import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../features/filters/model/filtersSlice.js";

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

    const headerLinks = [
        { title: "About us", to: "/products"},
        { title: "All shops", to: "/products"},
        { title: "Become a merchant", to: "/products"}
    ];

    const headerIcons = [
        { to: "/favorites", label: "Favorites", icon: favorites_icon, getCount: () => favoritesCount },
        { to: "/reserved", label: "Reserved", icon: reserved_icon, getCount: () => reservedCount },
        { to: "/login", label: "Profile", icon: hero_profile, getCount: null }
    ];

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
                    {headerLinks.map(({ title, to }) => (
                        <Link key={title} to={to} className="header__link">
                            <div className="header__link-text">
                                {title}
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="header__icons">
                    {headerIcons.map(({ to, label, icon, getCount }) => (
                        <Link key={to} to={to} className="header__icon-link" aria-label={label}>
                            <img src={icon} alt={label} className="header__icon-image" />
                            {getCount && <span className="header__icon-count">{getCount()}</span>}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
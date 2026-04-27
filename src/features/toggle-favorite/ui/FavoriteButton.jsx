import React from "react";

import favoriteIcon from "../../../assets/favorite.svg";
import favoriteActiveIcon from "../../../assets/mdi_heart.svg";

import "./FavoriteButton.css";

function FavoriteButton({ isActive, onClick }) {
    return (
        <button
            className={isActive ? "favorite-button favorite-button--active" : "favorite-button"}
            type="button"
            onClick={onClick}
            aria-label="Toggle favorite"
        >
            <img
                src={isActive ? favoriteActiveIcon : favoriteIcon}
                alt=""
            />
        </button>
    );
}

export default FavoriteButton;
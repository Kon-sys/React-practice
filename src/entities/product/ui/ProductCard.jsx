import React from "react";
import { Link } from "react-router-dom";

import FavoriteButton from "../../../features/toggle-favorite/ui/FavoriteButton";
import ReservedButton from "../../../features/toggle-reserved/ui/ReservedButton";

import "./ProductCard.css";

function ProductCard({
                         product,
                         isFavorite,
                         isReserved,
                         onToggleFavorite,
                         onToggleReserved,
                     }) {
    function handleFavoriteClick(event) {
        event.preventDefault();
        onToggleFavorite();
    }

    function handleReservedClick(event) {
        event.preventDefault();
        onToggleReserved();
    }

    return (
        <article className="product-card">
            <Link to={`/products/${product.id}`} className="product-card__image-wrapper">
                <img
                    className="product-card__image"
                    src={product.thumbnail}
                    alt={product.title}
                />

                <div className="product-card__favorite">
                    <FavoriteButton
                        isActive={isFavorite}
                        onClick={handleFavoriteClick}
                    />
                </div>

                {isReserved && (
                    <div className="product-card__badges">
                        <ReservedButton
                            isReserved={true}
                            onClick={handleReservedClick}
                        />
                    </div>
                )}
            </Link>

            <div className="product-card__info">
                <h3 className="product-card__title">{product.title}</h3>
            </div>

            <div className="product-card__footer">
                <div className="product-card__price-block">
                    <span className="product-card__price">{product.price} €</span>
                </div>

                {!isReserved && (
                    <ReservedButton
                        isReserved={false}
                        onClick={handleReservedClick}
                    />
                )}
            </div>
        </article>
    );
}

export default ProductCard;
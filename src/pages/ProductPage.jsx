import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../widgets/Header/Header";
import { useGetProductByIdQuery } from "../services/api";
import { addReserved, removeReserved } from "../features/reserved/reservedSlice";
import { toggleFavorite } from "../features/favorites/favoritesSlice";

import "./styles/ProductPage.css";

function ProductPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { data: product, isLoading } = useGetProductByIdQuery(id);

    const reservedItems = useSelector((state) => state.reserved.items);
    const favoriteItems = useSelector((state) => state.favorites.items);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const isReserved = reservedItems.some((item) => item.id === product.id);
    const isFavorite = favoriteItems.some((item) => item.id === product.id);

    function handleReserved() {
        if (isReserved) {
            dispatch(removeReserved(product.id));
        } else {
            dispatch(addReserved(product));
        }
    }

    function handleFavorite() {
        dispatch(toggleFavorite(product));
    }

    return (
        <>
            <Header />

            <main className="product-page">
                <div className="product-page__container">

                    {/* IMAGE */}
                    <div className="product-page__image-block">
                        <img src={product.thumbnail} alt={product.title} />
                    </div>

                    {/* INFO */}
                    <div className="product-page__info">
                        <h1 className="product-page__title">{product.title}</h1>

                        <p className="product-page__description">
                            {product.description}
                        </p>

                        <div className="product-page__price">
                            {product.price} €
                        </div>

                        <div className="product-page__meta">
                            <span>Brand: {product.brand}</span>
                            <span>Category: {product.category}</span>
                        </div>

                        <div className="product-page__actions">
                            <button
                                className="product-page__cart"
                                onClick={handleReserved}
                            >
                                {isReserved ? "Remove from Reserved" : "Add to Reserved"}
                            </button>

                            <button
                                className="product-page__favorite"
                                onClick={handleFavorite}
                            >
                                {isFavorite ? "♥ Added" : "♡ Add to favorites"}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProductPage;
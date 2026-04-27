import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../../entities/product/ui/ProductCard.jsx";
import { addReserved, removeReserved } from "../../../entities/reserved/model/reservedSlice.js";
import { toggleFavorite } from "../../../entities/favorite/model/favoritesSlice.js";

function ProductCardContainer({ product }) {
    const dispatch = useDispatch();

    const isFavorite = useSelector((state) =>
        state.favorites.items.some((item) => item.id === product.id)
    );

    const isReserved = useSelector((state) =>
        state.reserved.items.some((item) => item.id === product.id)
    );

    function handleToggleReserved() {
        if (isReserved) {
            dispatch(removeReserved(product.id));
            return;
        }

        dispatch(addReserved(product));
    }

    function handleToggleFavorite() {
        dispatch(toggleFavorite(product));
    }

    return (
        <ProductCard
            product={product}
            isFavorite={isFavorite}
            isReserved={isReserved}
            onToggleFavorite={handleToggleFavorite}
            onToggleReserved={handleToggleReserved}
        />
    );
}

export default ProductCardContainer;
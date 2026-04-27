import React from "react";

import ProductCardContainer from "./ui/ProductCardContainer.jsx";
import "./ProductGrid.css";

function ProductGrid({ products }) {
    return (
        <section className="product-grid">
            {products.map((product) => (
                <ProductCardContainer key={product.id} product={product} />
            ))}
        </section>
    );
}

export default ProductGrid;
import React from "react";

import ProductCardContainer from "./ui/ProductCardContainer.jsx";
import "./ProductGrid.css";
import PageState from "../../shared/ui/PageState/PageState.jsx";

function ProductGrid({ products }) {
    return (
        <section className="product-grid">
            {products.length === 0 ? <PageState title="No products found" text="Try changing filters." />
                : products.map((product) => (
                <ProductCardContainer key={product.id} product={product} />
            ))}
        </section>
    );
}

export default ProductGrid;
const React = require("react");
const ProductCard = require("../ProductCard/ProductCard").default;
require("./ProductGrid.css");

function ProductGrid({ products }) {
    return (
        <section className="product-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
}

module.exports = ProductGrid;
module.exports.default = ProductGrid;
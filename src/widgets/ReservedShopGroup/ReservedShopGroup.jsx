const React = require("react");
require("./ReservedShopGroup.css");

function ReservedShopGroup({ shopName, location, workHours, reservedTime, products }) {
    return (
        <section className="reserved-shop-group">
            <div className="reserved-shop-group__header">
                <div className="reserved-shop-group__meta">
                    <span className="reserved-shop-group__label">Shop</span>
                    <span className="reserved-shop-group__value">{shopName}</span>
                </div>

                <div className="reserved-shop-group__meta">
                    <span className="reserved-shop-group__label">Location</span>
                    <span className="reserved-shop-group__value">{location}</span>
                </div>

                <div className="reserved-shop-group__meta">
                    <span className="reserved-shop-group__label">Work hours</span>
                    <span className="reserved-shop-group__value">{workHours}</span>
                </div>

                <div className="reserved-shop-group__meta">
                    <span className="reserved-shop-group__label">Reserved time</span>
                    <span className="reserved-shop-group__value">{reservedTime}</span>
                </div>
            </div>

            <div className="reserved-shop-group__products">
                {products.map((product) => (
                    <article className="reserved-product" key={product.id}>
                        <img
                            className="reserved-product__image"
                            src={product.thumbnail}
                            alt={product.title}
                        />

                        <div className="reserved-product__info">
                            <h3 className="reserved-product__title">{product.title}</h3>

                            <div className="reserved-product__row">
                                <span className="reserved-product__label">Price:</span>
                                <span className="reserved-product__value">{product.price} €</span>
                            </div>

                            <div className="reserved-product__row">
                                <span className="reserved-product__label">Color:</span>
                                <span className="reserved-product__value">Red</span>

                                <span className="reserved-product__label">Size:</span>
                                <span className="reserved-product__value">M</span>
                            </div>

                            <div className="reserved-product__row">
                                <span className="reserved-product__label">Delivery time:</span>
                                <span className="reserved-product__value">1–3 working days</span>
                            </div>

                            <div className="reserved-product__shipping-title">
                                <span>Shipping to Germany</span>
                                <span className="reserved-product__shipping-arrow" />
                            </div>

                            <p className="reserved-product__shipping">
                                Free shipping from € 34,00
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

module.exports = ReservedShopGroup;
module.exports.default = ReservedShopGroup;
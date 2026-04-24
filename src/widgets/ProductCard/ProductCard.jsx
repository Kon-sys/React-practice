const React = require("react");
const { Link } = require("react-router-dom");
const { useDispatch, useSelector } = require("react-redux");

const { addReserved, removeReserved } =
    require("../../features/reserved/reservedSlice").actions;

const { toggleFavorite } =
    require("../../features/favorites/favoritesSlice").actions;

const favoriteIcon = require("../../assets/favorite.svg");
const favoriteActiveIcon = require("../../assets/mdi_heart.svg");
const cartIcon = require("../../assets/cart.svg");

require("./ProductCard.css");

function ProductCard({ product }) {
    const dispatch = useDispatch();

    const reservedItems = useSelector((state) => state.reserved.items);
    const favoriteItems = useSelector((state) => state.favorites.items);

    const isReserved = reservedItems.some((item) => item.id === product.id);
    const isFavorite = favoriteItems.some((item) => item.id === product.id);

    function handleReservedClick(event) {
        event.preventDefault();

        if (isReserved) {
            dispatch(removeReserved(product.id));
            return;
        }

        dispatch(addReserved(product));
    }

    function handleFavoriteClick(event) {
        event.preventDefault();
        dispatch(toggleFavorite(product));
    }

    return (
        <article className="product-card">
            <Link to={`/products/${product.id}`} className="product-card__image-wrapper">
                <img
                    className="product-card__image"
                    src={product.thumbnail}
                    alt={product.title}
                />

                <button
                    className="product-card__favorite"
                    type="button"
                    aria-label="Add to favorites"
                    onClick={handleFavoriteClick}
                >
                    <img
                        src={isFavorite ? favoriteActiveIcon : favoriteIcon}
                        alt=""
                        className="product-card__favorite-icon"
                    />
                </button>

                {isReserved && (
                    <div className="product-card__badges" onClick={handleReservedClick}>
                        <span className="product-card__badge product-card__badge--reserved">
                            Reserved
                        </span>
                    </div>
                )}
            </Link>

            <div className="product-card__info">
                <h3 className="product-card__title">{product.title}</h3>
            </div>

            <div className="product-card__footer">
                <div className="product-card__price-block">
          <span className="product-card__price">
            {product.price} €
          </span>
                </div>
                {isReserved ? (
                    <span className="product-card__added">Added</span>
                ) : (
                    <button
                        className="product-card__cart-button"
                        type="button"
                        aria-label="Add to reserved"
                        onClick={handleReservedClick}
                    >
                        <img src={cartIcon} alt="" className="product-card__cart-icon" />
                    </button>
                )}
                </div>
        </article>
    );
}

module.exports = ProductCard;
module.exports.default = ProductCard;
const React = require("react");
const { useDispatch, useSelector } = require("react-redux");
const CatalogBreadcrumbs = require("../CatalogBreadcrumbs/CatalogBreadcrumbs").default;
require("./CatalogToolbar.css");

const { setFilter, resetFilter, setCategoryPath } =
    require("../../features/filters/filtersSlice").actions;

const colorOptions = [
    { value: "", label: "Color" },
    { value: "white-dark", label: "White, Dark" },
    { value: "black", label: "Black" },
    { value: "brown", label: "Brown" },
];

const sizeOptions = [
    { value: "", label: "Size" },
    { value: "36-36.5", label: "36, 36.5" },
    { value: "s", label: "S" },
    { value: "m", label: "M" },
    { value: "l", label: "L" },
];

const priceOptions = [
    { value: "", label: "Price" },
    { value: "under-50", label: "Under $50" },
    { value: "50-100", label: "$50 - $100" },
    { value: "100-500", label: "$100 - $500" },
    { value: "over-500", label: "Over $500" },
];

const conditionOptions = [
    { value: "", label: "Condition" },
    { value: "new", label: "New" },
    { value: "used", label: "Used" },
];

const shopOptions = [
    { value: "", label: "Shop" },
    { value: "resale-hub", label: "Resale Hub" },
    { value: "trend-traders", label: "TrendTraders" },
];

function getUniqueValues(products, key) {
    return Array.from(
        new Set(products.map((product) => product[key]).filter(Boolean))
    );
}

function CatalogToolbar({ products }) {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);

    const brands = getUniqueValues(products, "brand");

    function handleChange(event) {
        const { name, value } = event.target;
        dispatch(setFilter({ name, value }));
    }

    function handleSaleToggle() {
        dispatch(setFilter({ name: "sale", value: !filters.sale }));
    }

    const activeFilters = [];

    if (filters.categoryPath && filters.categoryPath.length > 0) {
        filters.categoryPath.forEach((categoryTitle, index) => {
            activeFilters.push({
                name: `categoryPath-${index}`,
                label: categoryTitle,
                type: "categoryPath",
            });
        });
    }

    if (filters.color) {
        activeFilters.push({
            name: "color",
            label: colorOptions.find((item) => item.value === filters.color)?.label,
        });
    }

    if (filters.size) {
        activeFilters.push({
            name: "size",
            label: sizeOptions.find((item) => item.value === filters.size)?.label,
        });
    }

    if (filters.brand) {
        activeFilters.push({
            name: "brand",
            label: filters.brand,
        });
    }

    if (filters.price) {
        activeFilters.push({
            name: "price",
            label: priceOptions.find((item) => item.value === filters.price)?.label,
        });
    }

    if (filters.condition) {
        activeFilters.push({
            name: "condition",
            label: conditionOptions.find((item) => item.value === filters.condition)?.label,
        });
    }

    if (filters.shop) {
        activeFilters.push({
            name: "shop",
            label: shopOptions.find((item) => item.value === filters.shop)?.label,
        });
    }

    if (filters.sale) {
        activeFilters.push({
            name: "sale",
            label: "Sale",
        });
    }

    return (
        <div className="catalog-toolbar">
            <CatalogBreadcrumbs />

            <div className="catalog-toolbar__filters">
                <select
                    className="catalog-toolbar__select"
                    name="color"
                    value={filters.color}
                    onChange={handleChange}
                >
                    {colorOptions.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <select
                    className="catalog-toolbar__select"
                    name="size"
                    value={filters.size}
                    onChange={handleChange}
                >
                    {sizeOptions.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <select
                    className="catalog-toolbar__select"
                    name="brand"
                    value={filters.brand}
                    onChange={handleChange}
                >
                    <option value="">Brand</option>
                    {brands.map((brand) => (
                        <option value={brand} key={brand}>
                            {brand}
                        </option>
                    ))}
                </select>

                <select
                    className="catalog-toolbar__select"
                    name="price"
                    value={filters.price}
                    onChange={handleChange}
                >
                    {priceOptions.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <select
                    className="catalog-toolbar__select"
                    name="condition"
                    value={filters.condition}
                    onChange={handleChange}
                >
                    {conditionOptions.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <select
                    className="catalog-toolbar__select"
                    name="shop"
                    value={filters.shop}
                    onChange={handleChange}
                >
                    {shopOptions.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <button
                    className={
                        filters.sale
                            ? "catalog-toolbar__sale catalog-toolbar__sale--active"
                            : "catalog-toolbar__sale"
                    }
                    type="button"
                    onClick={handleSaleToggle}
                >
                    <span>Sale</span>
                    {filters.sale && <span className="catalog-toolbar__sale-close">×</span>}
                </button>
            </div>

            {activeFilters.length > 0 && (
                <div className="catalog-toolbar__chips">
                    {activeFilters.map((filter) => (
                        <button
                            className="catalog-toolbar__chip"
                            type="button"
                            key={filter.name}
                            onClick={() => {
                                if (filter.type === "categoryPath") {
                                    dispatch(resetFilter("category"));
                                    dispatch(setCategoryPath([]));
                                    return;
                                }

                                dispatch(resetFilter(filter.name));
                            }}
                        >
                            <span className="catalog-toolbar__chip-text">{filter.label}</span>
                            <span className="catalog-toolbar__chip-close">×</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

module.exports = CatalogToolbar;
module.exports.default = CatalogToolbar;
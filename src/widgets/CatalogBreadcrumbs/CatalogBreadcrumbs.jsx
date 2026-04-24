const React = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { resetFilters, setFilter, setCategoryPath } =
    require("../../features/filters/filtersSlice").actions;
require("./CatalogBreadcrumbs.css");

function CatalogBreadcrumbs() {
    const dispatch = useDispatch();
    const gender = useSelector((state) => state.filters.gender);
    const categoryPath = useSelector((state) => state.filters.categoryPath);

    const crumbs = ["Home", gender, ...categoryPath];

    function handleClick(index) {
        if (index === 0) {
            dispatch(resetFilters());
            return;
        }

        if (index === 1) {
            dispatch(setFilter({ name: "category", value: "" }));
            dispatch(setCategoryPath([]));
        }
    }

    return (
        <nav className="catalog-breadcrumbs" aria-label="Catalog breadcrumbs">
            {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;

                return (
                    <React.Fragment key={`${crumb}-${index}`}>
                        <button
                            className={
                                isLast
                                    ? "catalog-breadcrumbs__item catalog-breadcrumbs__item--current"
                                    : "catalog-breadcrumbs__item"
                            }
                            type="button"
                            onClick={() => handleClick(index)}
                        >
                            {crumb}
                        </button>

                        {!isLast && (
                            <span className="catalog-breadcrumbs__chevron" aria-hidden="true">
                ›
              </span>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
}

module.exports = CatalogBreadcrumbs;
module.exports.default = CatalogBreadcrumbs;
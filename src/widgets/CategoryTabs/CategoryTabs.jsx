const React = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { setFilter, setCategoryPath } = require("../../features/filters/filtersSlice").actions;
require("./CategoryTabs.css");

const tabs = ["Women", "Men", "Unisex", "Children", "New"];

function CategoryTabs() {
    const dispatch = useDispatch();
    const activeGender = useSelector((state) => state.filters.gender);

    return (
        <section className="category-tabs">
            <nav className="category-tabs__panel" aria-label="Product categories">
                {tabs.map((tab, index) => (
                    <React.Fragment key={tab}>
                        <button
                            className={
                                activeGender === tab
                                    ? "category-tabs__button category-tabs__button--active"
                                    : "category-tabs__button"
                            }
                            type="button"
                            onClick={() => {
                                dispatch(setFilter({ name: "gender", value: tab }));
                                dispatch(setFilter({ name: "category", value: "" }));
                                dispatch(setCategoryPath([]));
                            }}
                        >
                            {tab}
                        </button>

                        {index !== tabs.length - 1 && (
                            <span className="category-tabs__divider" aria-hidden="true" />
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </section>
    );
}

module.exports = CategoryTabs;
module.exports.default = CategoryTabs;
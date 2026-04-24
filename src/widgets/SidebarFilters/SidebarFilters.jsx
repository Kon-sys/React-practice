const React = require("react");
const { useState } = React;
const { useDispatch, useSelector } = require("react-redux");
const { setFilter, setCategoryPath } = require("../../features/filters/filtersSlice").actions;
require("./SidebarFilters.css");


const categories = [
    {
        id: "shoes",
        title: "Shoes",
        value: "mens-shoes",
        children: [
            {
                id: "womens-shoes",
                title: "Women shoes",
                value: "womens-shoes",
                children: [],
            },
            {
                id: "mens-shoes",
                title: "Men shoes",
                value: "mens-shoes",
                children: [],
            },
        ],
    },
    {
        id: "apparel",
        title: "Apparel",
        value: "mens-shirts",
        children: [
            {
                id: "mens-shirts",
                title: "Men shirts",
                value: "mens-shirts",
                children: [],
            },
            {
                id: "womens-dresses",
                title: "Women dresses",
                value: "womens-dresses",
                children: [],
            },
            {
                id: "womens-tops",
                title: "Women tops",
                value: "womens-tops",
                children: [],
            },
        ],
    },
    {
        id: "accessories",
        title: "Accessories",
        value: "womens-bags",
        children: [
            {
                id: "belts",
                title: "Belts",
                value: "mens-belts",
                children: [
                    {
                        id: "leather-belts",
                        title: "Leather belts",
                        value: "mens-belts",
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        id: "sport",
        title: "Sport",
        value: "sports-accessories",
        children: [
            {
                id: "sports-accessories",
                title: "Sports accessories",
                value: "sports-accessories",
                children: [],
            },
            {
                id: "motorcycle",
                title: "Motorcycle",
                value: "motorcycle",
                children: [],
            },
        ],
    },
    {
        id: "beauty",
        title: "Beauty",
        value: "beauty",
        children: [
            {
                id: "fragrances",
                title: "Fragrances",
                value: "fragrances",
                children: [],
            },
            {
                id: "skin-care",
                title: "Skin care",
                value: "skin-care",
                children: [],
            },
        ],
    },
];

function Chevron({ isOpen }) {
    return (
        <span
            className={
                isOpen
                    ? "sidebar-filters__chevron sidebar-filters__chevron--open"
                    : "sidebar-filters__chevron"
            }
        />
    );
}

function SidebarFilters() {
    const [openedCategories, setOpenedCategories] = useState([]);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.filters.category);

    function toggleCategory(categoryId) {
        setOpenedCategories((prevOpenedCategories) => {
            const isAlreadyOpen = prevOpenedCategories.includes(categoryId);

            if (isAlreadyOpen) {
                return prevOpenedCategories.filter((id) => id !== categoryId);
            }

            return [...prevOpenedCategories, categoryId];
        });
    }

    function isCategoryOpen(categoryId) {
        return openedCategories.includes(categoryId);
    }

    function selectCategory(categoryValue, path) {
        dispatch(setFilter({ name: "category", value: categoryValue || "" }));
        dispatch(setCategoryPath(path));
    }

    return (
        <aside className="sidebar-filters">
            <h2 className="sidebar-filters__title">Categories</h2>

            <div className="sidebar-filters__list">
                {categories.map((category) => {
                    const isOpen = isCategoryOpen(category.id);
                    const hasChildren = category.children.length > 0;
                    const isActive = selectedCategory === category.value;

                    return (
                        <div className="sidebar-filters__section" key={category.id}>
                            <button
                                className={
                                    isActive
                                        ? "sidebar-filters__main-button sidebar-filters__main-button--active"
                                        : "sidebar-filters__main-button"
                                }
                                type="button"
                                onClick={() => {
                                    toggleCategory(category.id);
                                    selectCategory(category.value, [category.title]);
                                }}
                            >
                                <span>{category.title}</span>
                                {hasChildren && <Chevron isOpen={isOpen} />}
                            </button>

                            {isOpen && hasChildren && (
                                <div className="sidebar-filters__sub-list">
                                    {category.children.map((child) => {
                                        const isChildOpen = isCategoryOpen(child.id);
                                        const childHasChildren = child.children.length > 0;
                                        const isChildActive = selectedCategory === child.value;

                                        return (
                                            <div className="sidebar-filters__sub-section" key={child.id}>
                                                <button
                                                    className={
                                                        isChildActive
                                                            ? "sidebar-filters__sub-button sidebar-filters__sub-button--active"
                                                            : "sidebar-filters__sub-button"
                                                    }
                                                    type="button"
                                                    onClick={() => {
                                                        toggleCategory(child.id);
                                                        selectCategory(child.value, [category.title, child.title]);
                                                    }}
                                                >
                                                    <span>{child.title}</span>
                                                    {childHasChildren && <Chevron isOpen={isChildOpen} />}
                                                </button>

                                                {isChildOpen && childHasChildren && (
                                                    <div className="sidebar-filters__nested-list">
                                                        {child.children.map((nested) => {
                                                            const isNestedActive =
                                                                selectedCategory === nested.value;

                                                            return (
                                                                <button
                                                                    className={
                                                                        isNestedActive
                                                                            ? "sidebar-filters__nested-button sidebar-filters__nested-button--active"
                                                                            : "sidebar-filters__nested-button"
                                                                    }
                                                                    type="button"
                                                                    key={nested.id}
                                                                    onClick={() => selectCategory(nested.value, [category.title, child.title, nested.title])}
                                                                >
                                                                    {nested.title}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </aside>
    );
}

module.exports = SidebarFilters;
module.exports.default = SidebarFilters;
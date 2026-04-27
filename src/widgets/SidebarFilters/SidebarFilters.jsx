import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { categories } from "./constants/categories.js";
import SidebarCategory from "./ui/SidebarCategory.jsx";

import { setFilter, setCategoryPath } from "../../features/filters/model/filtersSlice.js";

import "./SidebarFilters.css";

function SidebarFilters() {
    const dispatch = useDispatch();

    const selectedCategory = useSelector((state) => state.filters.category);
    const [openedCategories, setOpenedCategories] = useState([]);

    function toggleCategory(categoryId) {
        setOpenedCategories((prevOpenedCategories) => {
            if (prevOpenedCategories.includes(categoryId)) {
                return prevOpenedCategories.filter((id) => id !== categoryId);
            }

            return [...prevOpenedCategories, categoryId];
        });
    }

    function selectCategory(categoryValue, path) {
        dispatch(setFilter({ name: "category", value: categoryValue }));
        dispatch(setCategoryPath(path));
    }

    return (
        <aside className="sidebar-filters">
            <h2 className="sidebar-filters__title">Categories</h2>

            <div className="sidebar-filters__list">
                {categories.map((category) => (
                    <SidebarCategory
                        key={category.id}
                        category={category}
                        openedCategories={openedCategories}
                        selectedCategory={selectedCategory}
                        toggleCategory={toggleCategory}
                        selectCategory={selectCategory}
                    />
                ))}
            </div>
        </aside>
    );
}

export default SidebarFilters;
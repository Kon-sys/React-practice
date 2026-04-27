import React from "react";
import Chevron from "./Chevron.jsx";

function SidebarCategory({
                             category,
                             openedCategories,
                             selectedCategory,
                             toggleCategory,
                             selectCategory,
                         }) {
    const isOpen = openedCategories.includes(category.id);
    const hasChildren = category.children.length > 0;
    const isActive = selectedCategory === category.value;

    return (
        <div className="sidebar-filters__section">
            <button
                className={
                    isActive
                        ? "sidebar-filters__main-button sidebar-filters__main-button--active"
                        : "sidebar-filters__main-button"
                }
                type="button"
                onClick={() => {
                    if (hasChildren) {
                        toggleCategory(category.id);
                        return;
                    }

                    selectCategory(category.value, [category.title]);
                }}
            >
                <span>{category.title}</span>
                {hasChildren && <Chevron isOpen={isOpen} />}
            </button>

            {isOpen && hasChildren && (
                <div className="sidebar-filters__sub-list">
                    {category.children.map((child) => {
                        const isChildOpen = openedCategories.includes(child.id);
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
                                        if (childHasChildren) {
                                            toggleCategory(child.id);
                                            return;
                                        }

                                        selectCategory(child.value, [category.title, child.title]);
                                    }}
                                >
                                    <span>{child.title}</span>
                                    {childHasChildren && <Chevron isOpen={isChildOpen} />}
                                </button>

                                {isChildOpen && childHasChildren && (
                                    <div className="sidebar-filters__nested-list">
                                        {child.children.map((nested) => {
                                            const isNestedActive = selectedCategory === nested.value;

                                            return (
                                                <button
                                                    className={
                                                        isNestedActive
                                                            ? "sidebar-filters__nested-button sidebar-filters__nested-button--active"
                                                            : "sidebar-filters__nested-button"
                                                    }
                                                    type="button"
                                                    key={nested.id}
                                                    onClick={() =>
                                                        selectCategory(nested.value, [
                                                            category.title,
                                                            child.title,
                                                            nested.title,
                                                        ])
                                                    }
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
}

export default SidebarCategory;
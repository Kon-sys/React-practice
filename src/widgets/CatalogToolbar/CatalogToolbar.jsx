import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CatalogBreadcrumbs from "../CatalogBreadcrumbs/CatalogBreadcrumbs.jsx";

import { filterConfig } from "./config/filterOptions.js";
import { getActiveFilters } from "./lib/getActiveFilters.js";

import {
    resetFilter,
    setFilter,
    setCategoryPath,
} from "../../features/filters/model/filtersSlice.js";

import "./CatalogToolbar.css";

function getUniqueValues(products, key) {
    return Array.from(
        new Set(products.map((product) => product[key]).filter(Boolean))
    );
}

function CatalogToolbar({ products }) {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);

    const brands = getUniqueValues(products, "brand");

    const brandOptions = [
        { value: "", label: "Brand" },
        ...brands.map((brand) => ({
            value: brand,
            label: brand,
        })),
    ];

    const filtersForRender = filterConfig.map((filter) => {
        if (filter.name === "brand") {
            return {
                ...filter,
                options: brandOptions,
            };
        }

        return filter;
    });

    const activeFilters = getActiveFilters(filters, filtersForRender);

    function handleChange(event) {
        const { name, value } = event.target;
        dispatch(setFilter({ name, value }));
    }

    function handleSaleToggle() {
        dispatch(setFilter({ name: "sale", value: !filters.sale }));
    }

    function handleResetFilter(filter) {
        if (filter.type === "categoryPath") {
            dispatch(resetFilter("category"));
            dispatch(setCategoryPath([]));
            return;
        }

        dispatch(resetFilter(filter.name));
    }

    return (
        <div className="catalog-toolbar">
            <CatalogBreadcrumbs />

            <div className="catalog-toolbar__filters">
                {filtersForRender.map((filter) => (
                    <select
                        className="catalog-toolbar__select"
                        name={filter.name}
                        value={filters[filter.name]}
                        onChange={handleChange}
                        key={filter.name}
                    >
                        {filter.options.map((option) => (
                            <option value={option.value} key={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                ))}

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
                            onClick={() => handleResetFilter(filter)}
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

export default CatalogToolbar;
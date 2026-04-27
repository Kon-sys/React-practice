import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../features/filters/model/filtersSlice.js";
import "./SortBar.css";

function SortBar() {
    const dispatch = useDispatch();
    const activeSort = useSelector((state) => state.filters.sort);

    function handleSortChange(sortValue) {
        dispatch(setFilter({ name: "sort", value: sortValue }));
    }

    return (
        <div className="sort-bar">
            <span className="sort-bar__label">Sort by:</span>

            <button
                className={
                    activeSort === "asc"
                        ? "sort-bar__button sort-bar__button--active"
                        : "sort-bar__button"
                }
                type="button"
                onClick={() => handleSortChange("asc")}
            >
                Ascending price
            </button>

            <button
                className={
                    activeSort === "desc"
                        ? "sort-bar__button sort-bar__button--active"
                        : "sort-bar__button"
                }
                type="button"
                onClick={() => handleSortChange("desc")}
            >
                Descending price
            </button>
        </div>
    );
}

export default SortBar;
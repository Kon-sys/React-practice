import React from "react";
import "./ReservedTabs.css";

function ReservedTabs({ activeTab, onTabChange }) {
    return (
        <div className="reserved-tabs">
            <button
                className={
                    activeTab === "reserved"
                        ? "reserved-tabs__item reserved-tabs__item--active"
                        : "reserved-tabs__item"
                }
                type="button"
                onClick={() => onTabChange("reserved")}
            >
                <span className="reserved-tabs__text">Reserved</span>
                <span className="reserved-tabs__line" />
            </button>

            <button
                className={
                    activeTab === "purchased"
                        ? "reserved-tabs__item reserved-tabs__item--active"
                        : "reserved-tabs__item"
                }
                type="button"
                onClick={() => onTabChange("purchased")}
            >
                <span className="reserved-tabs__text">Purchased</span>
                <span className="reserved-tabs__line" />
            </button>
        </div>
    );
}

export default ReservedTabs;
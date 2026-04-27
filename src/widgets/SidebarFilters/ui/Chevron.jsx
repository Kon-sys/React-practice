import React from "react";

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

export default Chevron;
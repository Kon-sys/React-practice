import React from "react";

import reservedIcon from "../../../assets/cart.svg";

import "./ReservedButton.css";

function ReservedButton({ isReserved, onClick }) {
    if (isReserved) {
        return (
            <button
                className="reserved-button reserved-button--active"
                type="button"
                onClick={onClick}
            >
                Reserved
            </button>
        );
    }

    return (
        <button
            className="reserved-button"
            type="button"
            onClick={onClick}
            aria-label="Toggle reserved"
        >
            <img src={reservedIcon} alt="" />
        </button>
    );
}

export default ReservedButton;
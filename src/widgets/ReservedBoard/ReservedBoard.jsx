import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReservedTabs from "../ReservedTabs/ReservedTabs.jsx";
import ReservedShopGroup from "../ReservedShopGroup/ReservedShopGroup.jsx";

import { removeReserved } from "../../entities/reserved/model/reservedSlice.js";

import "./ReservedBoard.css";

function ReservedBoard() {
    const dispatch = useDispatch();

    const [activeTab, setActiveTab] = useState("reserved");
    const reservedItems = useSelector((state) => state.reserved.items);

    function handleRemoveReserved(productId) {
        dispatch(removeReserved(productId));
    }

    return (
        <>
            <ReservedTabs activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="reserved-board__content">
                {activeTab === "reserved" ? (
                    reservedItems.length > 0 ? (
                        <ReservedShopGroup
                            shopName="ReStyle Hub"
                            location="23A Gran Via"
                            workHours="MO - FR: 9AM - 8PM | SA - SU: 9AM - 8PM"
                            reservedTime="WED 14.04.2022 - FRI 16.04.2022"
                            products={reservedItems}
                            onRemove={handleRemoveReserved}
                        />
                    ) : (
                        <p className="reserved-board__placeholder">No reserved products yet</p>
                    )
                ) : (
                    <p className="reserved-board__placeholder">Purchased products will be here</p>
                )}
            </div>
        </>
    );
}

export default ReservedBoard;
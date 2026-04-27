import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../widgets/Header/Header";
import CategoryTabs from "../widgets/CategoryTabs/CategoryTabs";
import ReservedTabs from "../widgets/ReservedTabs/ReservedTabs";
import ReservedShopGroup from "../widgets/ReservedShopGroup/ReservedShopGroup";

require("./styles/ReservedPage.css");

function ReservedPage() {
    const [activeTab, setActiveTab] = useState("reserved");
    const reservedItems = useSelector((state) => state.reserved.items);

    return (
        <>
            <Header />
            <CategoryTabs />

            <main className="reserved-page">
                <div className="reserved-page__container">
                    <ReservedTabs activeTab={activeTab} onTabChange={setActiveTab} />

                    <div className="reserved-page__content">
                        {activeTab === "reserved" ? (
                            reservedItems.length > 0 ? (
                                <ReservedShopGroup
                                    shopName="ReStyle Hub"
                                    location="23A Gran Via"
                                    workHours="MO - FR: 9AM - 8PM | SA - SU: 9AM - 8PM"
                                    reservedTime="WED 14.04.2022 - FRI 16.04.2022"
                                    products={reservedItems}
                                />
                            ) : (
                                <p className="reserved-page__placeholder">No reserved products yet</p>
                            )
                        ) : (
                            <p className="reserved-page__placeholder">Purchased products will be here</p>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}

export default ReservedPage;
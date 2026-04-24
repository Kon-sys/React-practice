const React = require("react");
const { useState } = React;
const { useSelector } = require("react-redux");

const Header = require("../widgets/Header/Header");
const CategoryTabs = require("../widgets/CategoryTabs/CategoryTabs");
const ReservedTabs = require("../widgets/ReservedTabs/ReservedTabs");
const ReservedShopGroup = require("../widgets/ReservedShopGroup/ReservedShopGroup");

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

module.exports = ReservedPage;
module.exports.default = ReservedPage;
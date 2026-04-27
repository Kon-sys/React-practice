import React from "react";

import Header from "../widgets/Header/Header.jsx";
import CategoryTabs from "../widgets/CategoryTabs/CategoryTabs.jsx";
import ReservedBoard from "../widgets/ReservedBoard/ReservedBoard.jsx";

import "./styles/ReservedPage.css";

function ReservedPage() {
    return (
        <>
            <Header />
            <CategoryTabs />

            <main className="reserved-page">
                <div className="reserved-page__container">
                    <ReservedBoard />
                </div>
            </main>
        </>
    );
}

export default ReservedPage;
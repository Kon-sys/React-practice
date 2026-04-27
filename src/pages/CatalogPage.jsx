import React from "react";

import Header from "../widgets/Header/Header.jsx";
import CategoryTabs from "../widgets/CategoryTabs/CategoryTabs.jsx";
import CatalogBoard from "../widgets/CatalogBoard/CatalogBoard.jsx";

import "./styles/CatalogPage.css";

function CatalogPage() {
    return (
        <>
            <Header />
            <CategoryTabs />

            <main className="catalog-page">
                <CatalogBoard />
            </main>
        </>
    );
}

export default CatalogPage;
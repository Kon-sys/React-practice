import React from "react";
import { useSelector } from "react-redux";

import SidebarFilters from "../SidebarFilters/SidebarFilters.jsx";
import CatalogToolbar from "../CatalogToolbar/CatalogToolbar.jsx";
import SortBar from "../SortBar/SortBar.jsx";
import ProductGrid from "../ProductGrid/ProductGrid.jsx";

import { useGetProductsQuery } from "../../services/api.js";

import "./CatalogBoard.css";

function CatalogBoard() {
    const filters = useSelector((state) => state.filters);

    const { data, isLoading, error } = useGetProductsQuery();
    const products = data?.products || [];

    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            !filters.search ||
            product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            product.description.toLowerCase().includes(filters.search.toLowerCase()) ||
            product.category.toLowerCase().includes(filters.search.toLowerCase()) ||
            product.brand?.toLowerCase().includes(filters.search.toLowerCase());

        const matchesCategory =
            !filters.category || product.category === filters.category;

        const matchesBrand = !filters.brand || product.brand === filters.brand;

        const matchesPrice =
            !filters.price ||
            (filters.price === "under-50" && product.price < 50) ||
            (filters.price === "50-100" &&
                product.price >= 50 &&
                product.price <= 100) ||
            (filters.price === "100-500" &&
                product.price >= 100 &&
                product.price <= 500) ||
            (filters.price === "over-500" && product.price > 500);

        const matchesCondition =
            !filters.condition ||
            (filters.condition === "new" && product.rating >= 4.5) ||
            (filters.condition === "used" && product.rating < 4.5);

        const matchesShop =
            !filters.shop ||
            (filters.shop === "resale-hub" && product.id % 2 === 0) ||
            (filters.shop === "trend-traders" && product.id % 2 !== 0);

        const matchesSale = !filters.sale || product.discountPercentage > 0;

        return (
            matchesSearch &&
            matchesCategory &&
            matchesBrand &&
            matchesPrice &&
            matchesCondition &&
            matchesShop &&
            matchesSale
        );
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (filters.sort === "desc") {
            return b.price - a.price;
        }

        return a.price - b.price;
    });

    if (isLoading) {
        return (
            <div className="catalog-board">
                <p className="catalog-board__state">Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="catalog-board">
                <p className="catalog-board__state">Something went wrong.</p>
            </div>
        );
    }

    return (
        <div className="catalog-board">
            <div className="catalog-board__container">
                <SidebarFilters />

                <section className="catalog-board__content">
                    <CatalogToolbar products={products} />

                    <SortBar />

                    <div className="catalog-board__products">
                        <ProductGrid products={sortedProducts} />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CatalogBoard;
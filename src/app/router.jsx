const React = require("react");
const { Routes, Route, Navigate } = require("react-router-dom");

const AuthPage = require("../pages/AuthPage").default;
const CatalogPage = require("../pages/CatalogPage").default;
const ProductPage = require("../pages/ProductPage").default;
const ReservedPage = require("../pages/ReservedPage").default;

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/products" element={<CatalogPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/reserved" element={<ReservedPage />} />
        </Routes>
    );
}

module.exports = { AppRouter };
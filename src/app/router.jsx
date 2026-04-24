const React = require("react");
const { Routes, Route, Navigate } = require("react-router-dom");

const AuthPage = require("../pages/AuthPage");
const CatalogPage = require("../pages/CatalogPage");
const ReservedPage = require("../pages/ReservedPage");

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/products" element={<CatalogPage />} />
            <Route path="/reserved" element={<ReservedPage />} />
        </Routes>
    );
}

module.exports = { AppRouter };
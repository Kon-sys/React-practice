import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AuthPage from"../pages/AuthPage";
import CatalogPage from "../pages/CatalogPage";
import ReservedPage from "../pages/ReservedPage";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/products" element={<CatalogPage />} />
            <Route path="/reserved" element={<ReservedPage />} />
            <Route path="/login" element={<AuthPage />} />
        </Routes>
    );
}

export { AppRouter };
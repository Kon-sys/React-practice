import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AuthPage from"../pages/AuthPage";
import CatalogPage from "../pages/CatalogPage";
import ReservedPage from "../pages/ReservedPage";
import PrivateRoute from "./PrivateRoute";
import ProductPage from "../pages/ProductPage";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/login" element={<AuthPage />} />
            <Route
                path="/products/:id"
                element={
                    <PrivateRoute>
                        <ProductPage />
                    </PrivateRoute>
                }
            />
            <Route path="/products" element={<CatalogPage />} />
            <Route
                path="/reserved"
                element={
                    <PrivateRoute>
                        <ReservedPage />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}

export { AppRouter };
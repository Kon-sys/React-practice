import React from "react";

import Header from "../widgets/Header/Header";
import AuthWidget from "../widgets/AuthWidget/AuthWidget";

import "./styles/AuthPage.css";

function AuthPage() {
    return (
        <>
            <Header />

            <main className="auth-page">
                <AuthWidget />
            </main>
        </>
    );
}

export default AuthPage;
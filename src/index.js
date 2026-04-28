import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AuthInitializer from "./app/AuthInitializer.jsx";
import App from "./app/App.jsx";
import { store } from "./app/store.js";

const basename = process.env.NODE_ENV === "production" ? "/React-practice" : "/";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <BrowserRouter basename={basename}>
            <AuthInitializer>
                <App />
            </AuthInitializer>
        </BrowserRouter>
    </Provider>
);
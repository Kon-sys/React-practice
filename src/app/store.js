import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api.js";

import authReducer from "../features/auth/authSlice.js";
import reservedReducer from "../features/reserved/reservedSlice.js";
import favoritesReducer from "../features/favorites/favoritesSlice.js";
import filtersReducer from "../features/filters/filtersSlice.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
        reserved: reservedReducer,
        favorites: favoritesReducer,
        filters: filtersReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export { store };
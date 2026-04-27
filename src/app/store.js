import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";

import authReducer from "../features/auth/authSlice";
import reservedReducer from "../features/reserved/reservedSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import filtersReducer from "../features/filters/filtersSlice";

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
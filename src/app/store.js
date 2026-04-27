import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api.js";

import authReducer from "../features/auth/model/authSlice.js";
import reservedReducer from "../entities/reserved/model/reservedSlice.js";
import favoritesReducer from "../entities/favorite/model/favoritesSlice.js";
import filtersReducer from "../features/filters/model/filtersSlice.js";

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
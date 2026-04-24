const { configureStore } = require("@reduxjs/toolkit");
const { api } = require("../services/api");

const reservedReducer = require("../features/reserved/reservedSlice");
const favoritesReducer = require("../features/favorites/favoritesSlice");
const filtersReducer = require("../features/filters/filtersSlice");

const store = configureStore({
    reducer: {
        reserved: reservedReducer,
        favorites: favoritesReducer,
        filters: filtersReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

module.exports = { store };
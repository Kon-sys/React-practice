import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        items: [],
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const exists = state.items.find((item) => item.id === action.payload.id);

            if (exists) {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            } else {
                state.items.push(action.payload);
            }
        },
        clearFavorites: (state) => {
            state.items = [];
        }
    },
});

export default favoritesSlice.reducer;
export const { toggleFavorite, clearFavorites} = favoritesSlice.actions;
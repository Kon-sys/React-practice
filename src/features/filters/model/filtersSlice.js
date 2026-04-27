import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: "asc",
    search: "",
    gender: "",
    category: "",
    categoryPath: [],
    color: "",
    size: "",
    brand: "",
    price: "",
    condition: "",
    shop: "",
    rating: "",
    stock: "",
    sale: false,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },

        resetFilter: (state, action) => {
            const { payload: name } = action;
            state[name] = initialState[name];
        },

        resetFilters: () => initialState,

        setCategoryPath: (state, action) => {
            state.categoryPath = action.payload;
        }
    },
});

export const { resetFilter, resetFilters, setFilter, setCategoryPath } = filtersSlice.actions;
export default filtersSlice.reducer;
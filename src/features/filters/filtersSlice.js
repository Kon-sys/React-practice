const { createSlice } = require("@reduxjs/toolkit");

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        search: "",
        category: "",
    },
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        },
        resetFilters(state) {
            state.search = "";
            state.category = "";
        },
    },
});

module.exports = filtersSlice.reducer;
module.exports.actions = filtersSlice.actions;
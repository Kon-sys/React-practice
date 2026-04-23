const { createSlice } = require("@reduxjs/toolkit");

const reservedSlice = createSlice({
    name: "reserved",
    initialState: {
        items: [],
    },
    reducers: {
        addReserved(state, action) {
            const exists = state.items.find((item) => item.id === action.payload.id);

            if (!exists) {
                state.items.push(action.payload);
            }
        },
        removeReserved(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearReserved(state) {
            state.items = [];
        },
    },
});

module.exports = reservedSlice.reducer;
module.exports.actions = reservedSlice.actions;
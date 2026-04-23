const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        isAuthenticated: false,
    },
    reducers: {
        setCredentials(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

module.exports = authSlice.reducer;
module.exports.actions = authSlice.actions;
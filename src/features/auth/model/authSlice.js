import { createSlice } from "@reduxjs/toolkit";

const savedToken = localStorage.getItem("accessToken");
const savedUser = localStorage.getItem("authUser");

const initialState = {
    user: savedUser ? JSON.parse(savedUser) : null,
    token: savedToken || null,
    isAuthenticated: Boolean(savedToken),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;

            localStorage.setItem("accessToken", action.payload.token);
            localStorage.setItem("authUser", JSON.stringify(action.payload.user));
        },

        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;

            localStorage.removeItem("accessToken");
            localStorage.removeItem("authUser");
        },
    },
});


export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
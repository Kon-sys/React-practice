import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetCurrentUserQuery } from "../services/api.js";
import { setCredentials } from "../features/auth/model/authSlice.js";

function AuthInitializer({ children }) {
    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.token);

    const { data: currentUser } = useGetCurrentUserQuery(token, {
        skip: !token || token === "local-user-token",
    });

    useEffect(() => {
        if (currentUser && token) {
            dispatch(
                setCredentials({
                    user: currentUser,
                    token,
                })
            );
        }
    }, [currentUser, token, dispatch]);

    return children;
}

export default AuthInitializer;
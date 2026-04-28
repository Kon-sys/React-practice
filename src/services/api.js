import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com",
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),
        login: builder.mutation({
            query: (body) => ({
                url: "/user/login",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body,
                credentials: "include",
            }),
        }),
        registerUser: builder.mutation({
            query: (body) => ({
                url: "/users/add",
                method: "POST",
                body,
            }),
        }),
        getCurrentUser: builder.query({
            query: (token) => ({
                url: "/auth/me",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                credentials: "include",
            }),
        }),
    }),
});

const { useGetProductsQuery, useGetProductByIdQuery, useLoginMutation, useRegisterUserMutation, useGetCurrentUserQuery } = api;

export {
    api,
    useGetProductsQuery,
    useGetProductByIdQuery,
    useLoginMutation,
    useRegisterUserMutation,
    useGetCurrentUserQuery,
};
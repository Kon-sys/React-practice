const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/query/react");

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
    }),
});

const { useGetProductsQuery, useGetProductByIdQuery } = api;

module.exports = {
    api,
    useGetProductsQuery,
    useGetProductByIdQuery,
};
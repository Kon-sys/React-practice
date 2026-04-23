const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/query/react");

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com",
    }),
    endpoints: () => ({}),
});

module.exports = { api };
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://code-commando.com/api/v1/' }),
    endpoints: (builder) => ({
        // Fetch Categories
        getCategories: builder.query({
            query: () => 'category',
        }),
        // Fetch Products
        getProducts: builder.query({
            query: () => 'products',
        }),
        // Endpoint for registering a user
        registerUser: builder.mutation({
            query: (userData) => ({
                url: 'users/register',
                method: 'POST',
                body: userData,
            }),
        }),
        // Endpoint for logging in a user
        loginUser: builder.mutation({
            query: (userData) => ({
                url: 'auth/login',
                method: 'POST',
                body: userData,
            }),
        }),
    }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = apiSlice;
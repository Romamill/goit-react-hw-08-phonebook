import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 1,
  endpoints: builder => ({
    login: builder.mutation({
      query: dependencies => ({
        url: '/users/login',
        method: 'POST',
        body: dependencies,
      }),
    }),
    register: builder.mutation({
      query: dependencies => ({
        url: '/users/signup',
        method: 'POST',
        body: dependencies,
      }),
    }),
    getUser: builder.query({
      query: () => '/users/current',
    }),
  }),
});

export const { useGetUserQuery, useLoginMutation, useRegisterMutation } =
  authApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import createBaseApi from './BaseRtkQueryApi';


export const authApi = createBaseApi('/auth');

authApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (credentials) => ({
        url: '/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});
// Определите ваш API
//  export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ 
//     baseUrl: 'http://localhost:3000/api',
//     prepareHeaders: (headers, { getState }) => {
//       // Получаем токен из вашего стейта
//       const token = localStorage.getItem('token');
//       // const token = getState().auth.token;
//       // Добавляем токен к заголовкам запроса, если он есть
//       if (token) {
//         headers.set('Authorization', token);
//       }
//       return headers;
//     },
//   }), 
//   endpoints: (builder) => ({
//     signIn: builder.mutation({
//       query: (credentials) => ({
//         url: '/signin',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//   }),
// });


export const { useSignInMutation } = authApi;


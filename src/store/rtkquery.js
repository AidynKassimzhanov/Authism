import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createCustomApi = (baseUrl) => {
    return createApi({
      reducerPath: 'api',
      baseQuery: fetchBaseQuery({ 
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
          const token = localStorage.getItem('token');
          if (token) {
            headers.set('Authorization', token);
          }
          return headers;
        },
      }), 
    });
  };
  
  // Создание API с использованием общей логики prepareHeaders
  export const api1 = createCustomApi('http://localhost:3000/api');
//   export const api2 = createCustomApi('http://localhost:3000/api2');
  
  // Дальше добавляете свои endpoints как обычно
  api1.injectEndpoints({
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
  
//   api2.injectEndpoints({
//     endpoints: (builder) => ({
//       // Добавление других endpoints для api2
//     }),
//   });
  
  export const { useSignInMutation: useSignInMutationApi1 } = api1;
//   export const { useSignInMutation: useSignInMutationApi2 } = api2;
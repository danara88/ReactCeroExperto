import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    // Get todos endpoint
    getTodos: builder.query({ query: () => `/todos` }),

    // Get todo by id endpoint
    getTodoById: builder.query({ query: (id) => `/todos/${id}` }),
  }),
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;

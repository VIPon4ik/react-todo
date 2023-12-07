import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://6572080fd61ba6fcc0144120.mockapi.io/todos",
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos",
            providesTags: [{ type: "Todos", id: "todo" }],
        }),
        getSingleTodo: builder.query({
            query: (id) => `/todos/${id}`,
        }),
        createTodo: builder.mutation({
            query: (task) => ({
                url: "/todos",
                method: "POST",
                body: { task },
            }),
            invalidatesTags: [{ type: "Todos", id: "todo" }],
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Todos", id: "todo" }],
        }),
        putTodo: builder.mutation({
            query: ({ task, id }) => ({
                url: `/todos/${id}`,
                method: "PUT",
                body: { task },
            }),
            invalidatesTags: [{ type: "Todos", id: "todo" }],
        }),
    }),
});

export const {
    useGetTodosQuery,
    useGetSingleTodoQuery,
    useCreateTodoMutation,
    useDeleteTodoMutation,
    usePutTodoMutation,
} = todoApi;

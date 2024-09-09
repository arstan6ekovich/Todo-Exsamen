import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query({
      query: () => ({
        url: "/marchik",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    postTodo: build.mutation({
      query: (newData) => ({
        url: "/marchik",
        method: "POST",
        body: { newData: newData },
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});
export const { useGetTodoQuery, usePostTodoMutation } = api;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersAPI = createApi({
  reducerPath: "usersAPI",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => `users`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Users", id })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),
    addUser: build.mutation({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    getUnits: build.query({
      query: () => `units`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Units", id })),
              { type: "Units", id: "LIST" },
            ]
          : [{ type: "Units", id: "LIST" }],
    }),
    addPoints: build.mutation({
      query: (body) => (
        console.log(body),
        {
          url: `points/${body}`,
          method: "PUT",
          body,
        }
      ),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    makeComplete: build.mutation({
      query: (body) => (
      //  console.log(body),
        {
          url: `/${body.unit_name}/task/${body.material_id}`,
          method: "PUT",
          body,
        }
      ),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useGetUnitsQuery,
  useAddPointsMutation,
  useMakeCompleteMutation
} = usersAPI;

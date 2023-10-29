import { apiSlice } from "../../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getNews: builder.query({
            query: () => '/users',
            keepUnusedDataFor: 10,
        }),
        createNews: builder.mutation({
            query: body => ({
              url: '/users',
              method: 'POST',
              body: { ...body }
            })
          })
    })
})

export const {
    useGetNewsQuery,
    useCreateNewsMutation
} = usersApiSlice
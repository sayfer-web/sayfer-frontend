import { apiSlice } from "../../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllNews: builder.query({
            query: () => '/news',
            keepUnusedDataFor: 60,
        }),
        getNewsById: builder.query({
            query: (id: string) => `/news/${id}`,
            keepUnusedDataFor: 60,
        }),
        createNews: builder.mutation({
            query: body => ({
              url: '/news',
              method: 'POST',
              body: { ...body }
            })
          })
    })
})

export const {
    useGetAllNewsQuery,
    useGetNewsByIdQuery,
    useCreateNewsMutation
} = usersApiSlice
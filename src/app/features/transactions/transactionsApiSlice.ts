import { apiSlice } from "../../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTransactions: builder.query({
            query: () => '/transactions/findAllTransactions',
            keepUnusedDataFor: 10,
        }),
        // createNews: builder.mutation({
        //     query: body => ({
        //       url: '/users',
        //       method: 'POST',
        //       body: { ...body }
        //     })
        //   })
    })
})

export const {
    useGetTransactionsQuery,
    // useCreateNewsMutation
} = usersApiSlice
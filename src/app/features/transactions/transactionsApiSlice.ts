import { apiSlice } from "../../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllTransactions: builder.query({
            query: () => '/transactions/findAllTransactions',
            keepUnusedDataFor: 60,
        }),
        getTransactionById: builder.query({
            query: (id: string) => `/transactions/findTransactionById/${id}`,
            keepUnusedDataFor: 60,
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
    useGetAllTransactionsQuery,
    useGetTransactionByIdQuery
    // useCreateNewsMutation
} = usersApiSlice

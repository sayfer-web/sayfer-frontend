import { apiSlice } from "../../api/apiSlice";

export const ticketsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllTickets: builder.query({
            query: () => '/tickets',
            keepUnusedDataFor: 10,
        }),
        createTicket: builder.mutation({
            query: body => ({
                url: '/tickets',
                method: 'POST',
                body: { ...body }
            })
        })
    })
})

export const {
    useGetAllTicketsQuery,
    useCreateTicketMutation
} = ticketsApiSlice
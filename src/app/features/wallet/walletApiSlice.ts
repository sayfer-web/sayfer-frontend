import { apiSlice } from "../../api/apiSlice";



export const walletApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getWalletInfo: builder.query({
            query: data => (`/wallet/info/${data}`),
            keepUnusedDataFor: 60,
        }),
        getWalletAddresses: builder.mutation({
            query: username => ({
                url: `/wallet/getLtcAddress`,
                method: 'GET',
            }),
            // keepUnusedDataFor: 60,
        }),

    })
})

export const {
    useGetWalletInfoQuery,
    useGetWalletAddressesMutation,
} = walletApiSlice
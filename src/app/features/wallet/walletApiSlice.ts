import { apiSlice } from "../../api/apiSlice";



export const walletApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getWalletInfo: builder.query({
            query: data => (`/wallet/info/${data}`),
            keepUnusedDataFor: 60,
        }),
        getWalletLtcAddress: builder.query({
            query: username => ({
                url: `/wallet/getLtcAddress/${username}`,
                method: 'GET',
            }),
            // keepUnusedDataFor: 60,
        }),

    })
})

export const {
    useGetWalletInfoQuery,
    useGetWalletLtcAddressQuery,
} = walletApiSlice
import { apiSlice } from "../../api/apiSlice"

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth/log-in',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    registration: builder.mutation({
      query: credentials => ({
        url: '/users/register',
        method: 'POST',
        body: { ...credentials }
      })
    })
  })
})

export const {
  useLoginMutation,
  useRegistrationMutation
} = authApiSlice
import { apiSlice } from "../../app/api/apiSlice"

export const registrationApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
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
  useRegistrationMutation
} = registrationApiSlice
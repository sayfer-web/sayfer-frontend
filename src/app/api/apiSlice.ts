import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { setCredentials, logOut } from "../features/auth/authSlice"

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.sayfer.club/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    /* @ts-ignore */
    const token = getState().auth.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status === 403) {
    // console.log('sending refresh token')
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/refresh', api, extraOptions)
    // console.log(refreshResult)
    if (refreshResult?.data) {
      const user = api.getState().auth.user
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }))
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut({}))
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Note', 'User'],
  /* @ts-ignore */
  endpoints: builder => ({})
})
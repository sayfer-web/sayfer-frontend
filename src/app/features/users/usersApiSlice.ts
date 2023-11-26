import { apiSlice } from "../../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            keepUnusedDataFor: 10,
        }),
        getUserByUsername: builder.query({
            query: (username: string) => `/users/${username}`,
            keepUnusedDataFor: 10,
        }),
        updateProfile: builder.mutation({
            query: body => ({
                url: '/users/updateProfile',
                method: 'PATCH',
                body: { ...body }
            })
        }),
    })
})

export const {
    useGetUsersQuery,
    useGetUserByUsernameQuery,
    useUpdateProfileMutation,
} = usersApiSlice
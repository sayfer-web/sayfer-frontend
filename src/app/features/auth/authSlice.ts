import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: 'auth',
  initialState: { username: null, token: null, role: 1 },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, role } = action.payload
      state.username = user
      state.token = token
      state.role = role
    },
    logOut: (state, action) => {
      console.log(action)
      state.username = null,
      state.token = null
      state.role = 1
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions

export const selectCurrentUsername = (state: any) => state.auth.username
export const selectCurrentToken = (state: any) => state.auth.token
export const selectCurrentRole = (state: any) => state.auth.role
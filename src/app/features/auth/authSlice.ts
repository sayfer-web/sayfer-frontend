import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: 'auth',
  initialState: { username: null, token: null, role: ['Guest'], tokenBalanceSFR: 0 },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, role, tokenBalanceSFR } = action.payload
      state.username = user
      state.token = token
      state.role = role
      state.tokenBalanceSFR = tokenBalanceSFR
    },
    logOut: (state, action) => {
      // console.log(action)
      state.username = null,
      state.token = null
      state.role = ['Guest']
      state.tokenBalanceSFR = 0
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions

export const selectCurrentUsername = (state: any) => state.auth.username
export const selectCurrentToken = (state: any) => state.auth.token
export const selectCurrentRole = (state: any) => state.auth.role
export const selectCurrentTokenBalanceSFR = (state: any) => state.auth.tokenBalanceSFR
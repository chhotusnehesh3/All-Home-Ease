import { createSlice } from '@reduxjs/toolkit'

// create an auth slice to maintain the user signin status
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // user is not logged in
    status: false,
  },
  reducers: {
    signin: (state, action) => {
      // the user is now signed in
      state.status = true
    },
    signout: (state, action) => {
      // the user is signed out
      state.status = false
    },
  },
})

// export the reducer for authSlice
export default authSlice.reducer

// export the actions
export const { signin, signout } = authSlice.actions

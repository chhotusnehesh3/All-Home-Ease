import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Reducers/authSlice'

const store = configureStore({
  reducer: {
    authSlice,
  },
})

export default store

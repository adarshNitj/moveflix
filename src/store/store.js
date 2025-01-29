import { configureStore } from '@reduxjs/toolkit'
import moveflixReducer from './moveflixSlice'

export const store = configureStore({
  reducer: {
    moveflixData : moveflixReducer
  },
})
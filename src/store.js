import { configureStore } from '@reduxjs/toolkit'
import others from './slices/allState'


export default configureStore({
  reducer: {
   
    other:others
   
  },
  devTools: true,
})

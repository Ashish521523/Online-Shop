import {configureStore} from '@reduxjs/toolkit'
import {itemsSlice} from './itemSlice'
import bagSlice from './bagSlice'
 
const myntraStore = configureStore({
  reducer:{
  items:itemsSlice.reducer,
  bag:bagSlice.reducer,
}})

export default myntraStore;
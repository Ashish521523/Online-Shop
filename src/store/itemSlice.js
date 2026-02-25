import {createSlice} from '@reduxjs/toolkit'
import {DEFAULT_ITEMS} from './dataStore'
let itemsSlice=createSlice({
 name:"items",
 initialState:DEFAULT_ITEMS,
 reducers:{
  addinitialState:(store ,action)=>{
    return store;
  }
 }
})

export const itemsAction = itemsSlice.actions;
export {itemsSlice}
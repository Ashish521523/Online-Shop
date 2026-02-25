import {createSlice} from '@reduxjs/toolkit'

 const bagSlice = createSlice({
  name:'bag',
  initialState:[],
  reducers:{
    addTobag:(state, action)=>{
      state.push(action.payload);
    },

    removeBag:(state, action)=> {
      return state.filter(itemid => itemid !== action.payload)
    }
  },
})

export let bagActions = bagSlice.actions;
export default bagSlice;
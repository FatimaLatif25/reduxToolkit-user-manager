import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: { //big reducer that has micro reducers
     addUser(state, action){
      state.push(action.payload)  
     },
     removeUser(state, action) {
      state.splice(action.payload, 1)
     },
     clearAllUsers(state, action){
      return []
     }
  },
  extraReducers(builder){    //Extra Reducers use in Multiple Slices (Common login requied in multiple places) For extra reducer, micro reducer required 
    builder.addCase(userSlice.actions.clearAllUsers, () => {
      return []
    })
  }
})
// console.log("Action Creators", userSlice.actions)
export default userSlice.reducer
export const { addUser, removeUser, clearAllUsers } = userSlice.actions //Export action creators then import where you want
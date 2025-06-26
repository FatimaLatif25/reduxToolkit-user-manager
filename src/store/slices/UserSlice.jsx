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
      state.pop(action.payload)
     },
     deleteAllUsers(state, action){}
  }
})
// console.log("Action Creators", userSlice.actions)
export default userSlice.reducer
export const { addUser, removeUser } = userSlice.actions //Export action creators then import where you want
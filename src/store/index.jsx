import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "./slices/UserSlice"

const store = configureStore({ //Configure Store takes single Object that contains Reducers

  reducer: {  //It works as a root reducer
     users: userSlice
  }
})

export default store

import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "./Stores/AuthStore";
export default configureStore({
  reducer: {
    userLogin: AuthReducer
  }
})  
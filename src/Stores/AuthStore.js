import { createSlice } from '@reduxjs/toolkit'


export const authHandle = createSlice({
    name:"login",
    initialState:{
        currentUser:JSON.parse(localStorage.getItem('user')) || null  
    },
    
    reducers: {
        UserLogin: (state,action) =>{
            state.currentUser = action.payload
        },

        UserLogout: (state,action) =>{
            
            state.currentUser = null
        }
    }
})  

export const {UserLogin,UserLogout} = authHandle.actions

export default authHandle.reducer   
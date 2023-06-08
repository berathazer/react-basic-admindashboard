import { createSlice } from '@reduxjs/toolkit'


export const newUser = createSlice({
    name:"user",
    initialState:{
        fullname:"",
        username:"",
        phone:"",
        address:"",
        email:"",
        password:"",
        country:""

    },
    
    reducers: {
        addUser: (state,action) =>{
            state.currentUser = action.payload
        }
    }
})  

export const {UserLogin} = newUser.actions

export default newUser.reducer   
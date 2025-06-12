import { createSlice, } from "@reduxjs/toolkit";





const initialState = {
    email: "",
    password: "",
    userToken: sessionStorage.getItem('userToken') || null,

};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
        setCurrentUser: (state, action) => {
            state.userToken = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    
    }
})


export const { setCurrentUser, setEmail, setPassword } = authSlice.actions;
export default authSlice.reducer;
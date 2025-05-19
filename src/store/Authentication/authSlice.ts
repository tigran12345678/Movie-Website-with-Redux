import { createSlice, type PayloadAction  } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";


interface AuthState{
    user: User | null;
    initializing: boolean;
}


const initialState: AuthState = {
    user: null,
    initializing: true,
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | null> ){
            state.user = action.payload;
            state.initializing = false;
        }
    }
})


export const { setUser } = authSlice.actions;
export default authSlice.reducer;
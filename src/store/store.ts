import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./API/apiSlice";
import favoriteMoviesReducer from "../store/FavoriteMovies/favoriteMoviesSlice";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        favoriteMovies: favoriteMoviesReducer,
    },
    middleware: (getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
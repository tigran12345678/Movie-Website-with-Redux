import { createSlice } from "@reduxjs/toolkit";
import type { Movie } from "../../types";



const persisted = localStorage.getItem("favorites");
const initialState = {
  favoriteMovies: persisted ? JSON.parse(persisted) : []
};

const favoriteMoviesSlice = createSlice({

    name: 'favoriteMoviesSlice',
    initialState,

    reducers: {

        addToFavorites: (state, action) => {
            state.favoriteMovies.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.favoriteMovies));
        },
      removeFromFavorites: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie: Movie) => movie.id !== action.payload.id
      );
      localStorage.setItem('favorites', JSON.stringify(state.favoriteMovies));
    },

        clearFavorites: (state) => {
            state.favoriteMovies = [];
            localStorage.removeItem('favorites');
        }

    }

})


export const {addToFavorites, removeFromFavorites, clearFavorites} = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;
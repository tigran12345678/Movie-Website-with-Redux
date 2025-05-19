import { useDrawPopularMoviesQuery, useLookForMovieQuery } from "../store/API/apiSlice"
import { useState } from "react";
import { addToFavorites } from "../store/FavoriteMovies/favoriteMoviesSlice";
import { useDispatch } from "react-redux";
// import type { RootState } from "@reduxjs/toolkit/query";

function DrawMovies() {
  const [userInput, setUserInput] = useState("");
  const { data: popularMovies } = useDrawPopularMoviesQuery({});
  const {data: foundMovies} = useLookForMovieQuery(userInput);
  const dispatch = useDispatch();
  

  
  const response = userInput ? foundMovies: popularMovies;
  
  const movies = response?.results ?? [];

  


    function handleFavorites(id){
        const movieToAdd = movies.find((movie) => movie.id === id);
        dispatch(addToFavorites(movieToAdd));
    }


  return (
    <div>
        <input 
        type="text" 
        value = {userInput}
        onChange={(event) => setUserInput(event.target.value)}
        />
      {movies.map((movie) => (
        <div>
        <p key={movie.id}>{movie.original_title}</p>
        <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="movie Poster" />
        <button onClick = {() => handleFavorites(movie.id)}> Add to Favorites</button>
        </div>
      ))}
    </div>
  );
}

export default DrawMovies;

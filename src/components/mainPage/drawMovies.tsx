import { useDrawPopularMoviesQuery, useLookForMovieQuery } from "../../store/API/apiSlice"
import { useState, useEffect } from "react";
import { addToFavorites } from "../../store/FavoriteMovies/favoriteMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../paths/Paths";
// import type { RootState } from "@reduxjs/toolkit/query";
import './MainPage.css';
import Pagination from "../../Pagination/Pagination";


function DrawMovies() {
  const [userInput, setUserInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const { data: popularMovies } = useDrawPopularMoviesQuery(currentPage);
  const { data: foundMovies } = useLookForMovieQuery(userInput);

  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.auth.userToken);

  const response = userInput ? foundMovies : popularMovies;
  const movies = response?.results ?? [];




  function handleFavorites(id: number) {
    const movieToAdd = movies.find((movie) => movie.id === id);
    if (movieToAdd) {
      dispatch(addToFavorites(movieToAdd));

    }
  }



  return (
    <div >
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <div className = "Movies">

      
      {movies.map((movie) => (
        <div className="Movie">
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="movie Poster" />
          <p key={movie.id}>{movie.original_title}</p>
          <button onClick={() => handleFavorites(movie.id)}> Add to Favorites</button>
        </div>
      ))}
      </div>
      <Pagination 
      totalPosts={100}
      postsPerPage={20}
      setCurrentPage={setCurrentPage}
      ></Pagination>
    </div>
  );
}

export default DrawMovies;

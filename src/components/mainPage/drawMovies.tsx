import { useDrawPopularMoviesQuery, useLookForMovieQuery } from "../../store/API/apiSlice"
import { useState } from "react";
import { addToFavorites } from "../../store/FavoriteMovies/favoriteMoviesSlice";
import { useDispatch } from "react-redux";
import './MainPage.css';
import Pagination from "../../Pagination/Pagination.tsx";
import { Input } from "antd";


function DrawMovies() {
  const [userInput, setUserInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 20;

  const dispatch = useDispatch();
  const { data: popularMovies } = useDrawPopularMoviesQuery(currentPage);
  const { data: foundMovies } = useLookForMovieQuery({query: userInput, page: currentPage});

  const response = userInput ? foundMovies : popularMovies;
  let movies = response?.results ?? [];

  const normalizedMovies = movies.map(movie => {
    const title = movie.original_title.length > 20
      ? movie.original_title.slice(0, 20) + "..."
      : movie.original_title;

    return {
      ...movie,
      original_title: title,
    };
  });


  // const indexOfLast = currentPage * postsPerPage;
  // const indexOfFirst = indexOfLast - postsPerPage;

  // const currentMovies = normalizedMovies.slice(indexOfFirst, indexOfLast);


  function handleFavorites(id: number) {
    const movieToAdd = movies.find((movie) => movie.id === id);
    if (movieToAdd) {
      dispatch(addToFavorites(movieToAdd));

    }
  }



  return (
    <div >
      <Input
        type="text"
        style={{width: 200}}
        value={userInput}
        onChange={(event) => {
          setUserInput(event.target.value)
          setCurrentPage(1);
        }}
      />
      <div className="Movies">
        {normalizedMovies.map((movie) => (
          <div className="Movie">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="movie Poster" />
            <p key={movie.id}>{movie.original_title}</p>
            <button onClick={() => handleFavorites(movie.id)}> Add to Favorites</button>
          </div>
        ))}
      </div>
      <Pagination
        totalPosts={400}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default DrawMovies;

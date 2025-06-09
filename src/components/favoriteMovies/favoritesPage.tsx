import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites, clearFavorites } from "../../store/FavoriteMovies/favoriteMoviesSlice";
import './FavoriteMovies.css';


function FavoriteMovies() {

    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.favoriteMovies.favoriteMovies);



    function handleRemove(movie) {
        dispatch(removeFromFavorites(movie));
    }

    function handleClear() {
        dispatch(clearFavorites());
    }


    return (
        <div >
            <div className = "Movies">
            {movies.map((movie) => (
                <div className="Movie">
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
                    <p>{movie.original_title} </p>
                    <button onClick={() => handleRemove(movie)}>Remove from Favorites</button>
                </div>

            ))}
            </div>
            <button onClick={handleClear}>Clear Favorites</button>
        </div>
    )

}


export default FavoriteMovies;
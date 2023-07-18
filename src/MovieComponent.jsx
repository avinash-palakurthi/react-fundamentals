import { movies } from "./data/movieData";
import Movie from "./Movies";
import "./movies.css";

const fetchMoviesData = () => {
  return movies;
};

const MovieComponent = () => {
  const movieData = fetchMoviesData();
  return (
    <div className="movie-container">
      <h2>Movies List</h2>
      <ul className="movies-list">
        {movieData.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};
export default MovieComponent;

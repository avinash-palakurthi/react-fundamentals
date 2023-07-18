const Movie = ({ movie }) => {
  return (
    <li className="movie" key={movie.id}>
      <img src={movie.poster} alt="poster" height={"400px"} width={"300px"} />
      <p>
        {movie.title} by {movie.director}
      </p>
      <h4>Released on : {movie.year}</h4>
      <p> Rating: {movie.rating} </p>
    </li>
  );
};

export default Movie;

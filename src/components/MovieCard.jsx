import { Link } from "react-router-dom";
import "./Movie.css";

function MovieCard({ movie }) {
  const imgPath = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="col-md-3 my-3" key={movie.id}>
      <Link to={`/movie/${movie.id}`}>
        <img
          className="img-fluid movie-link"
          src={
            movie.poster_path
              ? imgPath + movie.poster_path
              : "https://www.suhsport.es/img/noImage.jpg"
          }
          alt={movie.title}
        />
      </Link>
    </div>
  );
}

export default MovieCard;

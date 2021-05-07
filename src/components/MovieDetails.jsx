import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function MovieDetails() {
  const [singleMovie, setSingleMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=f807dcfcc42e16bc9b4f4ecb4ae326b6`;
  const imgPath = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    async function getMovieById() {
      const res = await fetch(url);
      const data = await res.json();
      setSingleMovie(data);
      setIsLoading(false);
    }
    getMovieById();
  }, []);

  return (
    <div className="container">
      {isLoading && <Spinner />}
      {singleMovie ? (
        <div className="row">
          <div className="movie-details-wrapper py-5">
            <h2>{singleMovie.original_title}</h2>
            <h3>{singleMovie.tagline}</h3>
            <div>
              <img
                src={
                  singleMovie.backdrop_path
                    ? imgPath + singleMovie.backdrop_path
                    : "https://programacion.net/files/article/20160819020822_image-not-found.png"
                }
                alt={singleMovie.original_title}
              />
            </div>
            <h4>Overview: </h4>
            <p>{singleMovie.overview}</p>

            <ul className="genres-list">
              {singleMovie.genres &&
                singleMovie.genres.map((genre) => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
            </ul>

            <div>
              <p>Rating</p>
              <small
                className={`px-4 py-2 rounded ${
                  singleMovie.vote_average < 3
                    ? "bg-danger"
                    : singleMovie.vote_average >= 3 &&
                      singleMovie.vote_average < 7
                    ? "bg-warning text-secondary"
                    : "bg-success text-light"
                }`}
              >
                {singleMovie.vote_average} / 10 out of {singleMovie.vote_count}{" "}
                votes.
              </small>
            </div>
          </div>
        </div>
      ) : (
        <p>Lo sentimos, no pudimos cargar la película.</p>
      )}
    </div>
  );
}

export default MovieDetails;

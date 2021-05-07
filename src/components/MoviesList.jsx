import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../redux/actions";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";
import popcorn from "../assets/palomitas-de-maiz.svg";
import { incrementPage } from "../redux/actions";
import Pagination from "./Pagination";

function MoviesList() {
  const [isLoading, setIsLoading] = useState(true);

  const page = useSelector((state) => state.pagesReducer);
  const rating = useSelector((state) => state.ratingsReducer);
  const searchTerm = useSelector((state) => state.searchReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getMovies() {
      const url =
        searchTerm === ""
          ? `https://api.themoviedb.org/3/discover/movie?api_key=f807dcfcc42e16bc9b4f4ecb4ae326b6&vote_average.gte=${rating}&page=${page}`
          : `https://api.themoviedb.org/3/search/movie?api_key=f807dcfcc42e16bc9b4f4ecb4ae326b6&query=${searchTerm}&page=1`;
      const res = await fetch(url);
      const data = await res.json();
      let moviesData = data.results;
      dispatch(setMovies(moviesData));
      setIsLoading(false);
    }
    getMovies();
  }, [searchTerm, page, rating]);

  useEffect(() => {
    async function getInitialMovies() {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=f807dcfcc42e16bc9b4f4ecb4ae326b6&vote_average.gte=${rating}&page=${page}`
      );
      const data = await res.json();
      dispatch(setMovies(data.results));
    }
    getInitialMovies();
  }, []);

  const movies = useSelector((state) => state.moviesReducer);

  return (
    <div className="container">
      {isLoading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner />
        </div>
      ) : (
        <div className="popcorn-img">
          <img src={popcorn} alt="popcorn" />
        </div>
      )}
      <div className="row">
        {movies &&
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
      <Pagination />
    </div>
  );
}

export default MoviesList;

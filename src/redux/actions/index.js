export const setMovies = (movies) => {
  return {
    type: "SET_MOVIES",
    payload: movies,
  };
};

export const incrementPage = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrementPage = () => {
  return {
    type: "DECREMENT",
  };
};

export const setPage = (num) => {
  return {
    type: "SET_PAGE",
    payload: num,
  };
};

export const setRating = (rating) => {
  return {
    type: "SET_RATING",
    payload: rating,
  };
};

export const setSearch = (text) => {
  return {
    type: "SET_SEARCH_TERM",
    payload: text,
  };
};

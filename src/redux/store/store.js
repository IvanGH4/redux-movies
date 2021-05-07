import { createStore, combineReducers } from "redux";
import moviesReducer from "../reducers/moviesReducer";
import pagesReducer from "../reducers/pagesReducer";
import ratingsReducer from "../reducers/ratingsReducer";
import searchReducer from "../reducers/searchReducer";

let rootReducer = combineReducers({
  moviesReducer,
  pagesReducer,
  ratingsReducer,
  searchReducer,
});

let store = createStore(rootReducer);

export default store;

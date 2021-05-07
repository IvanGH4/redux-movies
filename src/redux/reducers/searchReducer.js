const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      let newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;

const pagesReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "SET_PAGE":
      let newPage = action.payload;
      return newPage;
    default:
      return state;
  }
};

export default pagesReducer;

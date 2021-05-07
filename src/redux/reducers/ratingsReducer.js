const ratingsReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_RATING":
      let newRating = action.payload;
      return newRating;
    default:
      return state;
  }
};

export default ratingsReducer;

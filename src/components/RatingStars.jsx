import { useState } from "react";
import Rating from "react-rating";
import { setRating } from "../redux/actions";
import { useDispatch } from "react-redux";

function RatingStars() {
  const [rate, setRate] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="rating-stars">
      <p>Filter by rating:</p>
      <Rating
        onChange={(value) => {
          setRate(value);
          dispatch(setRating(value));
        }}
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        step="2"
        stop="10"
        initialRating={rate}
      />
    </div>
  );
}

export default RatingStars;

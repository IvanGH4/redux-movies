import "./Header.css";
import SearchBox from "./SearchBox";
import { useLocation } from "react-router-dom";
import RatingStars from "./RatingStars";

function Header() {
  const location = useLocation();

  return (
    <header>
      <h1 className="text-center text-light">
        Your favourite movies in the same place!
      </h1>
      <h2 className="text-center text-light">Search for any movie you want</h2>
      <div className="d-flex justify-content-center">
        {location.pathname === "/search" ? <SearchBox /> : <RatingStars />}
      </div>
    </header>
  );
}

export default Header;

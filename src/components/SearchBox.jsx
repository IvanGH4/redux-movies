import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/actions";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  function handleChange(e) {
    setSearchTerm(e.target.value);
    dispatch(setSearch(e.target.value));
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={`search ${isActive && "active"}`}>
        <input
          type="text"
          className="input"
          placeholder="Search movie..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="button" onClick={() => setIsActive(!isActive)}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export default SearchBox;

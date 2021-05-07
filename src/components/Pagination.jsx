import { useSelector, useDispatch } from "react-redux";
import { setPage, incrementPage, decrementPage } from "../redux/actions";
function Pagination() {
  const page = useSelector((state) => state.pagesReducer);

  const dispatch = useDispatch();

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className="page-link"
            disabled={page <= 1 ? true : false}
            onClick={() => dispatch(decrementPage())}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => dispatch(setPage(1))}>
            1
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => dispatch(setPage(2))}>
            2
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => dispatch(setPage(3))}>
            3
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => dispatch(incrementPage())}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;

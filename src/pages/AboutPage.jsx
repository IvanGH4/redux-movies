function AboutPage() {
  return (
    <div className="container about">
      <h2>About this project</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Tech Stack:</h3>
          <ul>
            <li>
              React
              <ul>
                <li>React router</li>
                <li>
                  Hooks
                  <ul>
                    <li>useState</li>
                    <li>useEffect</li>
                    <li>useLocation</li>
                    <li>useParams</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Redux / React-redux
              <ul>
                <li>useSelector</li>
                <li>useDispatch</li>
              </ul>
            </li>
            <li>
              The Movie DB API
              <ul>
                <li>
                  <a
                    href="https://www.themoviedb.org/settings/api"
                    target="_blank"
                  >
                    Check the docs
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <div
                  className="d-flex align-items-center"
                  style={{ height: "100%" }}
                >
                  <img
                    className="img-fluid"
                    src="https://ha.edu.uy/img/hackacademy_ogimage_1200x1200.png"
                    alt="Hack Academy"
                  />
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Hack Academy</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Qui error quis consectetur magni deserunt tempore sint hic
                    maiores dolorum earum!
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Mayo, 2021</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

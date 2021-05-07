import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MovieDetails from "./components/MovieDetails";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Switch>
        <Route path="/search" component={HomePage} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Redirect from="/pelicula/:id" to="/movie/:id" />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;

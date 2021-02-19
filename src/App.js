import "./App.css";
import AddMovie from "./components/AddMovie";
import { MovieProvider } from "./components/MovieContext";
import MoviesList from "./components/MoviesList";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <AddMovie />
        <hr />
        <MoviesList />
      </MovieProvider>
    </div>
  );
}

export default App;

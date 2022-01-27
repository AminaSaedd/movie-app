import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from "./Menu";
import MovieList from "./movies/MovieList";
import { landingPageDTO, movieDTO } from "./movies/movies.model";
import IndexGenres from "./genres/IndexGenres";
function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});
  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "Spider-Man: Far from Home",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
          },
          {
            id: 2,
            title: "Luca",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Luca_%282021_film%29.png/220px-Luca_%282021_film%29.png",
          },
        ],
        upcomingReleases: [
          {
            id: 1,
            title: "Money Heist",
            poster:
              "https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
          },
          {
            id: 1,
            title: "Avengers",
            poster:
              "https://cdn.europosters.eu/image/750/posters/avengers-infinity-war-one-sheet-i58560.jpg",
          },
        ],
      });
    }, 1000);
  });

  return (
    <BrowserRouter>
    <Menu/>
    <div className="container">
      <Switch>
        <Route exact path="/">
      <h3>In Theaters</h3>
      <MovieList movies={movies.inTheaters} />
      <h3>Upcomming Releases</h3>
      <MovieList movies={movies.upcomingReleases} />
      </Route>
      <Route path="/genres">
        <IndexGenres/>

      </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

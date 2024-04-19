import { movies } from './data/movies.js';
import Movie from './Movie';
import './movies.css';
import './App.css';

const fetchMovieData = () => {
  return movies;
}

const MovieComponent = () => {
  const movieData = fetchMovieData();

  return(
    <div className="movie-container">
      <h2 className="App-header" >Movieww</h2>
      <ul className="movie-list">
        {
          movieData.map((movie)=>(
            <Movie key={movie.id} movie={movie} />
          ))
        }
      </ul>

    </div>
  )
};

export default MovieComponent;
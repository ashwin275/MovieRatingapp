import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies,getAllShows  } from '../../features/movies/Slice'
import MovieCard from "../MovieCard/MovieCard"
import './movielisting.scss'


function Movielisting() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
 
  let renderMovies = "";
  let renderShows = "";

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-err">
      <h2>{movies.error}</h2>
    </div>
  );

  renderShows = shows.Response === "True" ? (
    shows.Search.map((show, index) => ( // Changed 'shows' to 'show' here
      <MovieCard key={index} data={show} /> // Changed 'shows' to 'show' here
    ))
  ) : (
    <div className="movies-err">
      <h2>{shows.error}</h2>
    </div>
  );

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>{renderShows}</div>
      </div>
    </div>
  );
}

export default Movielisting;

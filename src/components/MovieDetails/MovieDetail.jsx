import React, { useEffect } from 'react'
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieorShowDetail ,getSelectedmovieorShow ,removeSelectedMOvieorShow} from '../../features/movies/Slice';
import "./MovieDetail.scss"
import ClipLoader from "react-spinners/ClipLoader";


function MovieDetail() {
  const {imdbID} = useParams();
  
  const dispatch = useDispatch()
  const data = useSelector(getSelectedmovieorShow)

  console.log(data)

  useEffect(()=>{

    dispatch(fetchAsyncMovieorShowDetail(imdbID))

    return ()=>{
      dispatch(removeSelectedMOvieorShow())
    }

  },[dispatch,imdbID]);
  return (
    <div className='MovieSection'>
      

      {Object.keys(data).length === 0?
      (<div className='loading'>
          <ClipLoader
        color="#fff"
        
        size={350}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        <h1>Loading.....</h1>
      </div>):(
        <>
      <div className='Setcion-left'>
        <div className='movie-title'>{data.Title}</div>
        <div className='movie-rating'>
          <span>
            IMDB Rating <i className='fa fa-star'></i>:{data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className='fa fa-thumbs-up'></i>:{" "}{data.imdbVotes}
          </span>
          <span>
            Runtime <i className='fa fa-film'></i>:{data.Runtime}
          </span>
          <span>
            Year < i className='fa fa-calendar'></i>:{data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>

      </div>

      <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
      
          </>
          )}
    </div>
  )
}

export default MovieDetail

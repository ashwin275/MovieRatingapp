import React, { useEffect } from 'react'
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieorShowDetail ,getSelectedmovieorShow } from '../../features/movies/Slice';


function MovieDetail() {
  const {imdbID} = useParams();
  const dispatch = useDispatch()
  const data = useSelector(getSelectedmovieorShow)

  console.log(data)

  useEffect(()=>{
    dispatch(fetchAsyncMovieorShowDetail(imdbID))

  },[dispatch,imdbID]);
  return (
    <div>
        MovieDetail
      
    </div>
  )
}

export default MovieDetail

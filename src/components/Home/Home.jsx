import React ,{useEffect}from 'react'
import Movielisting from '../Movielisting/Movielisting'

import { useDispatch } from 'react-redux'
import { fetchAsyncMovies ,fetchAsyncShows } from '../../features/movies/Slice';


function home() {
  const dispatch = useDispatch();

  
   

  useEffect(()=>{
    
  dispatch(fetchAsyncMovies())
  dispatch(fetchAsyncShows())

   
  },[dispatch])

  return (
    <div>
        <div className='banner-img'></div>
        <Movielisting/>

      
    </div>
  )
}

export default home

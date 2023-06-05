import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from "../../images/user.jpg"
import "./header.scss"
import { fetchAsyncShows, fetchAsyncMovies } from '../../features/movies/Slice';
import { useDispatch } from 'react-redux';

function header() {
  const dispatch = useDispatch()
  const [term,setTerm] = useState("");
  console.log(term)

  const submitHandler =(e)=>{

    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  };


  return (
    <div className='header'>
      
      <div className='logo'><Link to="/">Movie App  </Link> </div>

      <div className='SearchBar'> 
      <form onSubmit={submitHandler}>
        <input type='text' value={term} placeholder='Search Movies or Shows' onChange={(e)=>setTerm(e.target.value)}></input>
        <button type='submit' > <i className='fa fa-search'></i> </button>
      </form>
      </div>
    
      <div className='user-image'>
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default header

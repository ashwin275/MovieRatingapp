import React from 'react'
import { Link } from 'react-router-dom'
import user from "../../images/user.jpg"
import "./header.scss"

function header() {
  return (
    <div className='header'>
      <Link to="/">
      <div className='logo'>Movie App</div>
      </Link>
     
      <div className='user-image'>
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default header

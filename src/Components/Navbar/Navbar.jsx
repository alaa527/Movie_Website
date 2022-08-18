import React from 'react'
import style from "./Navbar.module.css"
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
function Navbar() {
  const totalvalue=useSelector((state)=>state.value)
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand h1" href="#"><i className="fa-solid text-danger fa-clapperboard"></i>  Movie</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">TV Shows</a>
        </li>
    
      </ul>
     
        
        <button className="btn btn-danger" type="submit">Sign in</button>
        <div className={style.badgeicon}>
          <Link to="/Fav">
          <i className="fa-regular text-danger mx-3 fa-heart"></i>
      <span className={`badge bg-danger`}>{totalvalue}</span>
          </Link>
          </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

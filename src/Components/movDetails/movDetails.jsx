import React from 'react'
import style from './movDetails.module.css'
import {Movies} from '../Movies/Movie'
import {useEffect,useState} from 'react';
import axios from 'axios'

import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux'
function MovieDetail() {
  const dispatch=useDispatch();
  let { id } = useParams()
  const [MovieById, setMovieById]=useState([])

  const fetchDataById = async () => {
    const { data } =await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=a808cb8534878926957f187cbee4fd21')
const alldata=Array.from(data.results);
const filteredProject = alldata.find((p) => p.id == id)
setMovieById(filteredProject);
  };
  useEffect(() => {
    fetchDataById();
  }, []);


  const addToFav=()=>{
    const action={type:'addToFav',payload:MovieById}
    dispatch(action)
    
  }
  return (
    <div className='bg-dark'>
   <h2 className={`text-light ${style.HeadDetails}`}>Movie Details</h2>
    <div className='container mt-5 pb-3'>
 <div className='row'>
  <div className='col-md-4'>
  <img src={"https://image.tmdb.org/t/p/w500"+MovieById.poster_path} className="img-fluid rounded-start" alt="..."/>
  </div>
  <div className='col-md-5 text-light'>
  <h4 >{MovieById.original_title||MovieById.original_name}</h4>
        <p >{MovieById.overview}</p>
        <p >release_date: <small className="text-muted">{MovieById.release_date}</small></p>
        <p >media_type: <small className="text-muted">{MovieById.media_type}</small></p>
        <p >popularity: <small className="text-muted">{MovieById.popularity}</small></p>
        <p >original_language: <small className="text-muted">{MovieById.original_language}</small></p>
        
        <button className='btn btn-danger' onClick={addToFav}>ADD TO FAV</button>
    </div>
</div>
</div> 
</div>
  )
}

export default MovieDetail
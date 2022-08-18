import React, {useState,useEffect} from 'react';
import axios from 'axios'
import style from './Movie.module.css';
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer'
import {useSelector,useDispatch} from 'react-redux'
 
function Movie() {

  const [Filter, setFilter]=useState('')
  const [Movies, setMovies]=useState([])
  const searchText=(e)=>{
    setFilter(e.target.value)
  }
let dataSearch=Movies.filter(item=>{
  return Object.keys(item).some(key=>
    item[key].toString().toLowerCase().includes(Filter.toString().toLowerCase())
    )

}  )
  const fetchData = async () => {
    const { data } =await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=a808cb8534878926957f187cbee4fd21')
   setMovies(data.results);

  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className={`bg-dark ${style.MovieStyle}`}>
    <h2 className='text-light pt-3'>Movie</h2>

    <div className='container my-5'>
      <div className='row'>
      <div className='col-md-6'>
   <div className={style.search}>
      <input type="text" value={Filter} onChange={searchText.bind(this)} className={style.searchTerm} placeholder=" What are you looking for?"/>
      <button type="submit" className={style.searchButton}>
        <i className="fa fa-search"></i>
     </button>
   </div>
</div>

</div>
      {Movies.length > 0 ? (
        <div className='row'>
          {dataSearch.map((movie) => (

            <div className='col-md-3 py-3' key={movie.id}>
           <div className={style.movie_card}>
            <div className={style.box}>
           
            <img className='img-fluid mb-2' src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
          
            </div>
            <div className={style.carttitle}>
           <h5 className='mx-2'>{movie.original_title||movie.original_name}</h5>
           </div>
           <button className='btn btn-danger'><Link to={`/Details/${movie.id}`}>WATCH</Link></button>
          
       
     
           </div>
              
            </div>
          ))}
        </div>
      ) : (
        <p className={style.loading}>Loading... </p>
      )}
    </div>

        <Footer/>
    </div>

  )
}

export default Movie
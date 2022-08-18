import React from 'react'
import img1 from '../../img/movie.jpg'
import style from "./Fav.module.css"
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
function Fav() {
    const dispatch=useDispatch();
  
    const Favstate=useSelector((state)=>state.FavMovies)
  
    const res = [...new Set(Favstate)];

const Delete=(index)=>{
     const action={type:'removeFromFav',payload:index}
   dispatch(action)


}
  return (
    <div className={style.sheet}>
         <div>
        <h2 className={style.HeadFav}>Fav</h2>
        {Favstate.length===0? <div  className='d-flex justify-content-center my-5 text-light'><img height="300px" width="300px" className='img-fluid' src={img1}></img></div> :
        <div className='container text-light mt-5'>
    {res.map(function(d, index){
   
       return (


       <div key={index} className={style.card}>
    <div className="row">
        <div className='col-md-3'>
<img src={"https://image.tmdb.org/t/p/w500"+d.poster_path} className='img-fluid h-100 w-100 '></img>
        </div>
        <div className='col-md-8 '>
      <div className={style.moviestyle}>
      <h4>{d.original_title||d.original_name}</h4>
            <p >{d.overview}</p>  
        <p >media_type: <small className="text-muted">{d.media_type}</small></p>
       
        <p >original_language: <small className="text-muted">{d.original_language}</small></p>
        <button className="btn btn-danger my-2" onClick={()=>Delete(index)}><i className="fa-solid fa-trash-can"></i> DELETE</button>
      </div>
            
            </div>
    </div>
</div>
       )
     })}
    </div>}</div></div>


      )
}

export default Fav
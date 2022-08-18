import React from 'react'
import Popular from '../Popular/Popular'
import style from './Home.module.css'
import img1 from '../../img/kubo.jpg'


function Home() {
  return (
    <> 
    <div className={style.back_ground}>
    <div className={style.layer}>
    
    <div className={style.layer_contant}>
        <div className='col-md-5 '>
           
            <h2> Kubo and the two strings</h2>
            <p>A young boy named Kubo must locate a magical suit of armour worn by his late father in order to defeat a vengeful spirit from the past.</p>
      <p><i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> 7.7 (IMDb RATING) 2016 . PG . 1h 41m</p>
      <p><span className='text-danger'>Director: </span>Travis Knight</p>
      <p><span className='text-danger'>Tag: </span>Animation , Action , Adventure</p>
      <p><span className='text-danger'>Stars: </span>Charlize Theron , Art Parkinson , Matthew McConaughey</p>
       <button className='btn btn-danger'><i className="fa-solid text-light fa-play"></i> PLAY NOW</button>
        </div>
        <div className='col-md-4 offset-1'>
        <img className='img-fluid' src={img1}></img>
        </div>
    
    </div>
 
    </div>
    </div>
    
   <Popular/>

    </>
  )
}

export default Home
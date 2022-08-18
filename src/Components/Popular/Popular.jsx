import React ,{useEffect,useState}from 'react'
import style from './Popular.module.css'
import SwipperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Movie from '../Movies/Movie';
import axios from 'axios'
SwipperCore.use([ Navigation, Pagination, Scrollbar, A11y])
function Popular() {
  const [Populars, setPopulars]=useState([])

  const fetchData = async () => {
    const { data } =await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=a808cb8534878926957f187cbee4fd21')
    setPopulars(data.results);

  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
      <div className={style.swiperstyle}>
  <h2 className={`text-center text-light ${style.headstyle}`}>What Is Popular</h2>
<div className='container  my-5'>
<Swiper 
   breakpoints={{
     
      300: {
        width: 300,
        slidesPerView: 2,
      },
    
    }}
  className='py-5'
  spaceBetween={15}
  slidesPerView={5}
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  onSlideChange={() => console.log('slide change')}
  
>
{Populars.map((movie) => (
 
  <SwiperSlide key={movie.id}> 
<img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="Jane" className={style.imgstyle}/>

</SwiperSlide>


))} 
</Swiper>
 
  </div>


<Movie/>
  </div>
  )
      
}

export default Popular
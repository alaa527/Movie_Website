import React from 'react'
import style from './Footer.module.css'
function Footer() {
  return (
    <>
    <footer>
        <div className='container'>
            <div className={style.content}>
       
        <p className='d-inline-block'>We Are Social</p>
        <div className={style.social_icons}>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className="fa-solid fa-house-chimney"></i>
            <i className='fab fa-linkedin'></i>
        </div>
        <p className={style.copyright}>&copy; 2022 <span> Movie </span> All Right Reserved</p>
        </div></div>
    </footer>
    </>
  )
}

export default Footer
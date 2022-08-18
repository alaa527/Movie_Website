import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Details from './Components/movDetails/movDetails'
import Fav from './Components/Fav/Fav'

function App() {
  return (
    <>
<Navbar/>
    <Routes >
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/Details/:id" element={<Details/>} />
    <Route exact path="/Fav" element={<Fav/>} />
    </Routes>
    </>
  )
}

export default App
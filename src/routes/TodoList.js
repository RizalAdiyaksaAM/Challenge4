import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Challenge } from '../pages/Challenge'
import { Home } from '../pages/Home'
import { AllMovie } from '../pages/AllMovie'
import { SearchMovie } from '../pages/SearchMovie'
import { DetailMovie } from '../pages/DetailMovie'



export const TodoList = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/allmovie' element={<AllMovie/>}/>
    <Route path='/:namemovie' element={<SearchMovie/>}/>
    <Route path='/detail/:movieId' element={<DetailMovie/>}/>
    </Routes>
    </BrowserRouter>
  )
}

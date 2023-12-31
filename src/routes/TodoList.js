import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Challenge } from '../pages/Challenge'
import { Home } from '../pages/Home'
import { AllMovie } from '../pages/AllMovie'
import { SearchMovie } from '../pages/SearchMovie'
import { DetailMovie } from '../pages/DetailMovie'
import { Register } from '../pages/auth/Register'
import { LoginPage } from '../pages/auth/LoginPage'
import { Dashbooard } from '../pages/Dashbooard'
import { Latihan } from '../pages/Latihan'



export const TodoList = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashbooard/>}/>
    <Route path='/' element={<Latihan/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/allmovie' element={<AllMovie/>}/>
    <Route path='/:namemovie' element={<SearchMovie/>}/>
    <Route path='/detail/:movieId' element={<DetailMovie/>}/>
    </Routes>
    </BrowserRouter>
  )
}

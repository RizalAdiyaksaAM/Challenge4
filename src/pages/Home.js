import React from 'react'
import { Navbar } from '../assets/components/Navbar'
import { SlideMovie } from '../assets/components/SlideMovie'
import { PopularMovie } from '../assets/components/PopularMovie'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { CookieKeys, CookieStorage } from '../utils/cookie'


export const Home = () => {
  

  return (
    <div className='bg-black'>
        <Navbar ></Navbar>
        <SlideMovie></SlideMovie>
        <PopularMovie></PopularMovie>
    </div>
  )
}

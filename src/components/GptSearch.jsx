import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggetions from './GptMovieSuggetions'
import { backgroundImg } from '../utils/constand'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute w-full -z-10'>
        <img
        src={backgroundImg}
        alt="logo"
        className="w-full h-screen object-cover"
      />
        </div>
        <GptSearchBar/>
        <GptMovieSuggetions/>
 
    </div>
  )
}

export default GptSearch
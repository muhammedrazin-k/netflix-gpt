import React from 'react'

const MovieCards = ({poster}) => {
  return (
    <div className='w-40 flex hover:scale-105 transition-all duration-300 cursor-pointer'>
      <img src={poster} alt="" />
    </div>
  )
}

export default MovieCards
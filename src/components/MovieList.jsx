import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title,movies}) => {
  console.log(movies)
  return (
    <div className={`px-10 py-4  `}>
        <div >
            <h1 className='text-gray-200 text-2xl my-2 font-bold uppercase'>{title}</h1>
            <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto no-scrollbar">
                {movies && movies.map((movie,index)=>(
                  <MovieCards key={index} poster={movie?.Poster}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MovieList
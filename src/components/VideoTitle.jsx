import React from 'react'

const VideoTitle = ({title,type,poster,year}) => {
  return (

    <div className='py-20 px-12 flex flex-col justify-center h-screen '>
        <div className='py-3'>
            <img src={poster} alt="" className='w-40 h-40 object-cover object-top rounded' />
        </div>
        <h1 className='text-3xl font-bold text-gray-300'>{title}</h1>
        <p className='text-gray-400'>Type: <span className='text-white'>{type}</span></p>
        <p className='text-gray-400'>Year: <span className='text-white'>{year}</span> </p>
        <div className='flex gap-3 py-4'>
            <button className='bg-white text-black font-semibold px-8 py-2 rounded hover:scale-105 transition-transform duration-300 ease-out '> Play</button>
            <button className='bg-white/20 px-8 py-2 rounded font-semibold  hover:scale-105 transition-transform duration-300 ease-out '>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle
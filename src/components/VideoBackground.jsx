import React, { useEffect, useState } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({title}) => {
  const videoId=useSelector((storevideo)=>storevideo?.movies?.movieTrailers)
  console.log(videoId)
  useMovieTrailer(title)


  return (
    <div className="absolute inset-0 -z-20 overflow-hidden  ">
    <iframe
      className="
        absolute top-1/2 left-1/2
        w-[177.78vh] h-[100vh]
        min-w-[100vw] min-h-screen
        -translate-x-1/2 -translate-y-1/2
        pointer-events-none  scale-125
      "
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
      title="Video Background"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  </div>
  )
}

export default VideoBackground
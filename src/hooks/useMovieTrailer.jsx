import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addTrailer } from "../utils/movieSlice"

const useMovieTrailer=(title)=>{
    const dispatch=useDispatch()
    const api_key=process.env.REACT_APP_YOUTUBE_API_KEY
    
  
    useEffect(()=>{
      if(!title) return
      fetchVideo()
      console.log('hai')
    },[title])

    const fetchVideo=async()=>{
        try {
          const res=await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
                title + " official trailer"
              )}&type=video&videoEmbeddable=true&maxResults=1&key=${api_key}`
          )
          
          const data=await res.json()
          console.log(data)
          dispatch(addTrailer(data?.items?.[0]?.id?.videoId))
    
        } catch (err) {
          console.log(err.message)
          
        }
      }
}

export default useMovieTrailer
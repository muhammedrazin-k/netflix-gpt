import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { REACT_APP_OMDB_KEY } from '../utils/constand'
import { addEnglishMovies} from '../utils/movieSlice'

const useEnglishMovie = () => {
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")
  
    useEffect(()=>{
      fetchMovies('english')
    },[])
  
    const fetchMovies=async (searchText)=>{
      setLoading(true)
      setError("")
  
      try {
        const res=await fetch(`https://www.omdbapi.com/?apikey=${REACT_APP_OMDB_KEY}&s=${searchText}`)
        const data=await res.json()
  
        if(data.Response==="True"){
          dispatch(addEnglishMovies(data.Search))
        }
  
      } catch (err) {
        setError('Something went wrong')
        
      }
  
    }
}

export default useEnglishMovie
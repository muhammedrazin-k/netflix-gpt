import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { REACT_APP_OMDB_KEY } from '../utils/constand'
import { addEnglishMovies, addKoreanMovies} from '../utils/movieSlice'

const useKoreaMovies = () => {
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")
  
    useEffect(()=>{
      fetchMovies('korea')
    },[])
  
    const fetchMovies=async (searchText)=>{
      setLoading(true)
      setError("")
  
      try {
        const res=await fetch(`https://www.omdbapi.com/?apikey=${REACT_APP_OMDB_KEY}&s=${searchText}`)
        const data=await res.json()
  
        if(data.Response==="True"){
          dispatch(addKoreanMovies(data.Search))
        }
  
      } catch (err) {
        setError('Something went wrong')
        
      }
  
    }
}

export default useKoreaMovies
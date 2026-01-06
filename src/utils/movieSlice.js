import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        newMovies:null,
        englishMovies:null,
        movieTrailers:null,
        koreaMovies:null
    },
    reducers:{
        addnewMovies:(state,action)=>{
            state.newMovies=action.payload 
        },
        addTrailer:(state,action)=>{
            state.movieTrailers=action.payload
        },
        addEnglishMovies:(state,action)=>{
            state.englishMovies=action.payload
        },
        addKoreanMovies:(state,action)=>{
            state.koreaMovies=action.payload
        }
    }
})
export const {addnewMovies,addTrailer,addEnglishMovies,addKoreanMovies}=movieSlice.actions
export default movieSlice.reducer;
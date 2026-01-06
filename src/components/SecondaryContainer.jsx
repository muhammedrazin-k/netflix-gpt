import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black ">
      <div className="-mt-48 relative z-40">

      <MovieList title={"now playing"} movies={movies?.newMovies} />
      <MovieList title={"English"} movies={movies?.englishMovies} />
      <MovieList title={"korean"} movies={movies?.koreaMovies} />
      <MovieList title={"telugu"} movies={movies?.newMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

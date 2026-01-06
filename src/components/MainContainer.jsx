import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.newMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);

  const {Title,Type,Year,Poster}=mainMovie
  return (
    <div className="text-white relative z-30">
      <div className="bg-gradient-to-r from-black w-full h-screen absolute -z-10"></div>
      <VideoTitle title={Title} type={Type} year={Year} poster={Poster}/>
      <VideoBackground title={Title}/>
    </div>
  );
};

export default MainContainer;

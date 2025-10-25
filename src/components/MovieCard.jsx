import React from "react";

const MovieCard = ({ movie }) => {
  const { title, backdrop_path } = movie;
  return (
    <>
      <div className="inline-block relative sm:w-[200px] md:w-60  lg:w-[280px]">
        <img
          className="h-auto w-32 md:w-58 lg:w-64 mr-2"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
        />
        <h1 className="md:hidden absolute top-[80%] text-[9px] font-bebas tracking-wider text-white/80">
          {title}
        </h1>
        <div className="flex absolute inset-0 bg-black/60 backdrop-blur-md  items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
          <h1 className="font-bebas tracking-wider">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

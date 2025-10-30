import React from "react";
import axios from "axios";

const TvCard = ({ shows }) => {
  const { name, backdrop_path } = shows;
  return (
    <>
      <div className="inline-block relative sm:w-[200px] md:w-60  lg:w-[280px]  overflow-hidden m-1 cursor-pointer">
        <img
          className="h-40 w-full block rounded-md cursor-pointer object-cover"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={name}
        />
        <h1 className="md:hidden absolute top-[80%] left-1 text-lg font-bebas tracking-wider text-white/80">
          {name}
        </h1>
        <div className="flex absolute inset-0 bg-black/60 backdrop-blur-md  items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300 rounded-md">
          <h1 className="font-bebas tracking-wider">{name}</h1>
        </div>
      </div>
    </>
  );
};

export default TvCard;

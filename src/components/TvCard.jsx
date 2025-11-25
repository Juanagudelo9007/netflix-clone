import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { PersonalInfo } from "../context/UserInfo";

const TvCard = ({ shows }) => {
  const { name, backdrop_path } = shows;
  const { addMovies, addWatchLater } = useContext(PersonalInfo);
  return (
    <>
      <div className="inline-block relative sm:w-[200px] md:w-60  lg:w-[280px]  overflow-hidden m-1 cursor-pointer">
        <button
          className="absolute top-1 right-1 z-10 cursor-pointer md:hidden"
          onClick={() => addMovies(shows)}
        >
          <FaRegHeart />
        </button>
        <button
          className="absolute top-1 left-1 z-10 cursor-pointer md:hidden"
          onClick={() => addWatchLater(shows)}
        >
          <FaPlus />
        </button>
        <img
          className="h-40 w-full block rounded-md cursor-pointer object-cover"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={name}
        />
        <h1 className="md:hidden absolute top-[80%] left-1 text-lg font-bebas tracking-wider text-white/80">
          {name}
        </h1>
        <div className="flex absolute inset-0 bg-black/60 backdrop-blur-md  items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300 rounded-md">
          <button
            className="absolute top-1 right-1 z-10 cursor-pointer"
            onClick={() => addMovies(movie)}
          >
            <FaRegHeart />
          </button>
          <button
            className="absolute top-1 left-1 z-10 cursor-pointer"
            onClick={() => addWatchLater(movie)}
          >
            <FaPlus />
          </button>
          <h1 className="font-bebas tracking-wider">{name}</h1>
        </div>
      </div>
    </>
  );
};

export default TvCard;

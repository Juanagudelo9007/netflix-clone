import React from "react";
import { useContext } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";
import { PersonalInfo } from "../context/UserInfo";

const MovieCard = ({ movie }) => {
  const { title, backdrop_path } = movie;
  const { addMovies, addWatchLater, messageAdded } = useContext(PersonalInfo);
  return (
    <>
      <div className=" inline-block relative sm:w-[200px] md:w-60  lg:w-[280px]  overflow-hidden m-1 cursor-pointer">
        <button
          className="absolute top-1 right-1 z-10 cursor-pointer md:hidden text-white"
          onClick={() => {
            addMovies(movie);
            messageAdded("favorites");
          }}
        >
          <FcLikePlaceholder size={18} />
        </button>
        <button
          className="absolute top-1 left-1 z-10 cursor-pointer md:hidden"
          onClick={() => {
            addWatchLater(movie);
            messageAdded("watchLater");
          }}
        >
          <FaPlus size={18} />
        </button>

        <img
          className="h-40 w-full block rounded-md cursor-pointer object-cover"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
        />
        <h1 className="md:hidden absolute top-[80%] left-1 text-lg font-bebas tracking-wider text-white/80">
          {title}
        </h1>

        {/* Overlay  */}
        <div className="flex absolute inset-0 bg-black/60 backdrop-blur-md  items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300 rounded-md">
          <button
            className="absolute top-1 right-1 z-10 cursor-pointer"
            onClick={() => {
              addMovies(movie);
              messageAdded("favorites");
            }}
          >
            <FcLikePlaceholder size={18} />
          </button>
          <button
            className="absolute top-1 left-1 z-10 cursor-pointer"
            onClick={() => {
              addWatchLater(movie);
              messageAdded("watchLater");
            }}
          >
            <FaPlus size={18} />
          </button>
          <h1 className="font-bebas tracking-wider">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

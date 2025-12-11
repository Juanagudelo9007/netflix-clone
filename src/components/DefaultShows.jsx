import React from "react";
import { useState, useEffect, useContext } from "react";
import endpoints from "../services/MovieInfo";
import axios from "axios";
import { PersonalInfo } from "../context/UserInfo";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";

const DefaultShows = () => {
  const [shows, setShows] = useState([]);
  const { addWatchLater, addMovies, watchAdded } = useContext(PersonalInfo);

  useEffect(() => {
    const showsDefault = async () => {
      try {
        const results = await axios.get(endpoints.rvDefault);
        console.log("default shows", results);
        setShows(results.data.results);
      } catch (error) {
        console.log("Error while loading default shows", error);
      }
    };
    showsDefault();
  }, []);

  if (!shows)
    return (
      <div>
        {" "}
        <h1>No Movies found...</h1>
      </div>
    );

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 group gap-2 items-center p-2 ">
      {shows.map((t) => (
        <div className="relative rounded-sm " key={t.id}>
          <button
            className="absolute top-1 right-1 z-10 cursor-pointer md:hidden"
            onClick={() => {
              addMovies(t);
              watchAdded("favorites");
            }}
          >
            <FcLikePlaceholder size={18} />
          </button>
          <button
            className="absolute top-1 left-1 z-10 cursor-pointer md:hidden"
            onClick={() => {
              addWatchLater(t);
              watchAdded("watchLater");
            }}
          >
            <FaPlus size={18} />
          </button>

          <img
            className="object-cover h-full rounded-sm"
            src={`https://image.tmdb.org/t/p/w500${t.backdrop_path}`}
            alt=""
          />
          <h1 className="absolute bottom-[5%] ml-2 font-bebas tracking-wider text-white/60 md:hidden">
            {t.name}
          </h1>
          <div className="hidden absolute inset-0 md:flex justify-center items-center bg-black/60  backdrop-blur-md opacity-0 hover:opacity-100 transition-all duration-300 rounded-sm">
            <button
              className="absolute top-1 right-1 z-10 cursor-pointer"
              onClick={() => {
                addMovies(t);
                watchAdded("favorites");
              }}
            >
              <FcLikePlaceholder size={18} />
            </button>
            <button
              className="absolute top-1 left-1 z-10 cursor-pointer"
              onClick={() => {
                addWatchLater(t);
                watchAdded("watchLater");
              }}
            >
              <FaPlus size={18} />
            </button>
            <h1 className="text-xl font-bebas tracking-wider">{t.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DefaultShows;

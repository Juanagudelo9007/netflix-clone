import React from "react";
import { useState, useEffect } from "react";
import endpoints from "../services/MovieInfo";
import axios from "axios";

const DefaultShows = () => {
  const [shows, setShows] = useState([]);

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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 group gap-4 items-center p-2 ">
      {shows.map((t) => (
        <div
          className="relative sm:w-60 md:w-[310px] lg:w-[315px] rounded-sm "
          key={t.id}
        >
          <img
            className="object-cover h-full rounded-sm"
            src={`https://image.tmdb.org/t/p/w500${t.backdrop_path}`}
            alt=""
          />
          <h1 className="absolute bottom-[5%] ml-2 font-bebas tracking-wider text-white/60 md:hidden">
            {t.name}
          </h1>
          <div className="hidden absolute inset-0 md:flex justify-center items-center bg-black/60  backdrop-blur-md opacity-0 hover:opacity-100 transition-all duration-300 rounded-sm">
            <h1 className="text-xl font-bebas tracking-wider">{t.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DefaultShows;

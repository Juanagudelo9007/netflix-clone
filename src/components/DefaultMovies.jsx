import React, { useEffect, useState } from "react";
import axios from "axios";
import endpoints from "../services/MovieInfo";

const DefaultMovies = () => {
  const [main, setMain] = useState([]);

  useEffect(() => {
    const MoviesDefault = async () => {
      try {
        const res = await axios.get(endpoints.popular);
        console.log("Default Movies:", res.data.results);
        setMain(res.data.results);
      } catch (error) {
        console.log("Error while fetching default movies", error);
      }
    };

    MoviesDefault();
  }, []);

  if (!main)
    return (
      <div>
        {" "}
        <h1>No Movies found...</h1>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 group items-center p-2">
      {main.map((r) => (
        <div
          key={r.id}
          className="relative sm:w-60 md:w-[310px] lg:w-[315px] rounded-sm"
        >
          <img
            className="object-cover h-full rounded-sm"
            src={`https://image.tmdb.org/t/p/w500${r.backdrop_path}`}
            alt=""
          />
          <h1 className="absolute bottom-[5%] ml-2 font-bebas tracking-wider text-white/60 md:hidden">
            {r.title}
          </h1>
          <div className="hidden absolute inset-0 md:flex justify-center items-center bg-black/60  backdrop-blur-md opacity-0 hover:opacity-100 transition-all duration-300 rounded-sm">
            <h1 className="text-xl font-bebas tracking-wider">{r.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DefaultMovies;

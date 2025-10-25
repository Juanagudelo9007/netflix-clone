import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieSection = ({ title, url }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const res = await axios.get(url);
        setMovie(res.data.results);
      } catch (error) {
        console.log("Error while fetching movies", error);
      }
    };
    loadMovies();
  }, [url]);

  console.log("movies", movie);

  return (
    <>
      <h1 className="capitalize font-bebas tracking-wider p-1">{title}</h1>
      <div className=" flex items-center">
        <div className="relative  h-full overflow-x-scroll scroll-smooth whitespace-nowrap group">
          {movie.map((k) => (
            <MovieCard key={k.id} movie={k} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieSection;

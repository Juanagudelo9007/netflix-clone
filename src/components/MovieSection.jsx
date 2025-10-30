import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useLocation } from "react-router-dom";

const MovieSection = ({ title, url }) => {
  const [movie, setMovie] = useState([]);
  const scrollRef = useRef(null);
  const location = useLocation();

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

  {
    /* scroll x */
  }

  const scrollHorizontal = (direction) => {
    const scrollX = scrollRef.current;
    if (direction === "left") {
      scrollX.scrollBy({ behavior: "smooth", left: -scrollX.offsetWidth });
    } else if (direction === "right") {
      scrollX.scrollBy({ left: scrollX.offsetWidth, behavior: "smooth" });
    }
  };

  return (
    <>
      <h1 className="capitalize font-bebas tracking-wider p-1 text-xl">
        {title}
      </h1>
      <div className="relative flex items-center group" id="movies">
        <button onClick={() => scrollHorizontal("left")}>
          <GrPrevious
            className="absolute left-2 top-16 bg-black/60 backdrop-blur-sm  block  md:hidden group-hover:md:block cursor-pointer rounded-full p-2 z-20 "
            size={30}
          />
        </button>
        <div
          className="relative h-full overflow-x-auto scroll-smooth whitespace-nowrap group no-scrollbar w-full"
          ref={scrollRef}
        >
          {movie.map((k) => (
            <MovieCard key={k.id} movie={k} />
          ))}
        </div>
        <button
          className="absolute right-2 top-16 bg-black/60 backdrop-blur-sm  block md:hidden  group-hover:md:block cursor-pointer rounded-full p-2 z-20"
          onClick={() => scrollHorizontal("right")}
        >
          <GrNext size={15} />
        </button>
      </div>
    </>
  );
};

export default MovieSection;

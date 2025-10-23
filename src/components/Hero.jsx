import React, { useEffect, useState } from "react";
import endpoints from "../services/MovieInfo";
import axios from "axios";

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(endpoints.trending);
        const resData = res.data.results;
        const randomMovie = resData[Math.floor(Math.random() * resData.length)];
        setMovie(randomMovie);

        console.log("movies:", randomMovie);
      } catch (error) {
        console.log("Error while fetching Movies", error);
      }
    };
    fetchMovies();
  }, []);

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[500px] lg:h-[600px] bg-linear-to-r from-black to-transparent">
      <div className="h-full w-full ">
        <div className="absolute w-full h-[500px] lg:h-[600px] bg-linear-to-r from-black" />
        <img
          className="w-full h-full object-cover object-top "
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title}
        />
        <div className="absolute w-full top-[20%] lg:top-[32%]">
          <h1>{title}</h1>
          <div>
            <button>Play</button>
            <button>Watch Later</button>
            <div>
              <p>{release_date}</p>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

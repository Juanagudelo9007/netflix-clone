import React, { useEffect, useState, useContext } from "react";
import endpoints from "../services/MovieInfo";
import axios from "axios";
import { PersonalInfo } from "../context/UserInfo";

const Hero = () => {
  const [movie, setMovie] = useState({});
  const [readMore, setReadMore] = useState(false);
  const { addWatchLater, messageAdded } = useContext(PersonalInfo);

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
    <div className="relative w-full h-[500px] lg:h-[600px]">
      <div className="h-full w-full ">
        <div className="absolute w-full h-[500px] lg:h-[600px] bg-linear-to-r from-black" />
        <img
          src="/netflix-logo.png"
          alt=""
          className=" absolute   top-3 left-1  h-6  z-20 md:w-8 md:h-8 "
        />
        <img
          className="w-full h-full object-cover object-top "
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title}
        />
        <div className="absolute w-[50%] top-32 md:top-32 lg:top-48 p-2 ">
          <h1 className="text-3xl font-bold mb-5 md:text-4xl">{title}</h1>
          <div className=" flex flex-col gap-3">
            <div className="flex gap-4">
              <button className="cursor-not-allowed px-4 border bg-white  py-1 text-black hover:bg-black hover:text-white hover:border hover:border-white transition-all duration-300 capitalize">
                play
              </button>
              <button
                className=" cursor-pointer px-3 py-1 border border-white hover:bg-white hover:text-black hover:border-black transition-all duration-300 capitalize"
                onClick={() => {
                  addWatchLater(movie);
                  messageAdded("watchLater");
                }}
              >
                watch later
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white/60">{release_date}</h1>
              <div>
                <p className={readMore ? "" : "truncate"}>{overview}</p>
                <button
                  className=" mt-1 cursor-pointer hidden md:block  transition-all hover:underline"
                  onClick={() => setReadMore(!readMore)}
                >
                  {!readMore ? "Read More" : "See Less"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

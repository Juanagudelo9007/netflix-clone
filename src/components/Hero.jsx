import React, { useEffect, useState } from "react";
import endpoints from "../services/MovieInfo";
import axios from "axios";

const Hero = () => {
  const [movie, setMovie] = useState({});
  const [readMore, setReadMore] = useState(false);

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
  },[]);

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
        <div className="absolute w-[50%] top-[20%] md:top-[25%] lg:top-[35%] p-2 ">
          <h1 className="text-3xl font-bold mb-5 md:text-4xl">{title}</h1>
          <div className=" flex flex-col gap-3">
            <div className="flex gap-4">
              <button className="cursor-pointer px-4 bg-white  py-1 text-black">
                Play
              </button>
              <button className=" cursor-pointer px-4 py-1 border border-white">
                Watch Later
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white/60">{release_date}</p>
              <div>
                <p className={readMore ? "" : "truncate"}>{overview}</p>
                <button
                  className=" mt-1 cursor-pointer "
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

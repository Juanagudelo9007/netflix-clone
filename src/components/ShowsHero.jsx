import React, { useEffect, useState } from "react";
import endpoints from "../services/MovieInfo";
import axios from "axios";

const ShowsHero = () => {
  const [tvShows, setTvShows] = useState({});
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    const fetchingShows = async () => {
      try {
        const resTv = await axios.get(endpoints.tvTrending);
        const tvData = resTv.data.results;
        const dynamic = tvData[Math.floor(Math.random() * tvData.length)];
        setTvShows(dynamic);
        console.log("tv data is:", dynamic);
      } catch (error) {
        console.log("Error while fetching tv shows");
      }
    };
    fetchingShows();
  }, []);

  const { name, backdrop_path, first_air_date, overview } = tvShows;

  return (
    <div className=" w-full h-[500px] lg:h-[600px] ">
      <div className="h-full w-full">
        <div className="absolute w-full h-[500px] lg:h-[600px] bg-linear-to-r from-black" />
        <img
          className="w-full h-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={name}
        />
        <div className="absolute w-[50%] top-[20%] md:top-[25%] lg:top-[35%] p-2">
          <h1 className="text-2xl font-bold mb-5 md:text-3xl">{name}</h1>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <button className="bg-white text-black px-4  cursor-pointer">
                play
              </button>
              <button className="px-4 py-1 cursor-pointer border border-white">
                watch later
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white/60">{first_air_date}</h1>
              <div>
                <p className={readMore ? "" : "truncate"}>{overview}</p>
                <button
                  className="transition-all  hover:underline cursor-pointer mt-1"
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

export default ShowsHero;

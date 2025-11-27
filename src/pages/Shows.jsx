import React from "react";
import endpoints from "../services/MovieInfo";
import MovieSection from "../components/MovieSection";
import ShowsHero from "../components/ShowsHero";
import DefaultShows from "../components/DefaultShows";
import { useContext } from "react";
import { PersonalInfo } from "../context/UserInfo";
import { createPortal } from "react-dom";

const Shows = () => {
  const { favAdded, watchAdded } = useContext(PersonalInfo);
  return (
    <>
      <ShowsHero />
      <MovieSection title={"anime"} tvUrl={endpoints.tvAnime} />
      <MovieSection title={"top rated"} tvUrl={endpoints.tvAiringToday} />
      <MovieSection title={"trending"} tvUrl={endpoints.tvTrending} />
      <DefaultShows />
      {favAdded &&
        createPortal(
          <div className="fixed bottom-0 w-full h-24 bg-black/70 backdrop-blur-2xl flex items-center justify-center">
            <h1 className="text-sm font-bebas tracking-wider capitalize">
              added to favorites
            </h1>
          </div>,
          document.getElementById("message")
        )}
      {watchAdded &&
        createPortal(
          <div className="fixed bottom-0 w-full h-24 bg-black/70 backdrop-blur-2xl flex items-center justify-center">
            <h1 className="text-sm font-bebas tracking-wider capitalize">
              added to watchlater
            </h1>
          </div>,
          document.getElementById("message")
        )}
    </>
  );
};

export default Shows;

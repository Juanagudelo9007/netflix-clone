import React from "react";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import endpoints from "../services/MovieInfo";
import DefaultMovies from "../components/DefaultMovies";
import { useContext } from "react";
import { PersonalInfo } from "../context/UserInfo";
import { createPortal } from "react-dom";

const Home = () => {
  const { favAdded, watchAdded } = useContext(PersonalInfo);
  return (
    <>
      <Hero />
      <MovieSection title="upcoming" movieUrl={endpoints.upcoming} />
      <MovieSection title="top Rated" movieUrl={endpoints.topRated} />
      <MovieSection title="trending" movieUrl={endpoints.trending} />
      <DefaultMovies />
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

export default Home;

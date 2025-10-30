import React from "react";
import endpoints from "../services/MovieInfo";
import MovieSection from "../components/MovieSection";
import ShowsHero from "../components/ShowsHero";

const Shows = () => {
  return (
    <>
      <ShowsHero />
      <MovieSection title={"anime"} tvUrl={endpoints.tvAnime} />
      <MovieSection title={"top rated"} tvUrl={endpoints.tvTopRated} />
      <MovieSection title={"trending"} tvUrl={endpoints.tvTrending} />
    </>
  );
};

export default Shows;

import React from "react";
import endpoints from "../services/MovieInfo";
import MovieSection from "../components/MovieSection";
import ShowsHero from "../components/ShowsHero";
import DefaultShows from "../components/DefaultShows";

const Shows = () => {
  return (
    <>
      <ShowsHero />
      <MovieSection title={"anime"} tvUrl={endpoints.tvAnime} />
      <MovieSection title={"top rated"} tvUrl={endpoints.tvAiringToday} />
      <MovieSection title={"trending"} tvUrl={endpoints.tvTrending} />
      <DefaultShows />
    </>
  );
};

export default Shows;

import React from "react";
import endpoints from "../services/MovieInfo";
import MovieSection from "../components/MovieSection";
import ShowsHero from "../components/ShowsHero";

const Shows = () => {
  return (
    <>
      <ShowsHero />
      <MovieSection title={"upcoming"} url={endpoints.tvTrending} />
      <MovieSection />
      <MovieSection />
      <MovieSection />
    </>
  );
};

export default Shows;

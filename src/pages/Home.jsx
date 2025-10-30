import React from "react";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import endpoints from "../services/MovieInfo";
import DefaultMovies from "../components/DefaultMovies";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieSection title="upcoming" movieUrl={endpoints.upcoming} />
      <MovieSection title="top Rated" movieUrl={endpoints.topRated} />
      <MovieSection title="trending" movieUrl={endpoints.trending} />
      <DefaultMovies />
    </>
  );
};

export default Home;

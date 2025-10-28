import React from "react";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import endpoints from "../services/MovieInfo";
import DefaultMovies from "../components/DefaultMovies";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieSection title="upcoming" url={endpoints.upcoming} />
      <MovieSection title="top Rated" url={endpoints.topRated} />
      <MovieSection title="trending" url={endpoints.trending} />
      <DefaultMovies />
    </>
  );
};

export default Home;

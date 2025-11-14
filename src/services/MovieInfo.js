const key = import.meta.env.VITE_TMDB_KEY;
const url = "https://api.themoviedb.org/3";

const endpoints = {
  popular: `${url}/movie/popular?api_key=${key}`,
  topRated: `${url}/movie/top_rated?api_key=${key}`,
  upcoming: `${url}/movie/upcoming?api_key=${key}`,
  trending: `${url}/trending/movie/day?api_key=${key}`,
  tvShows: `${url}/tv/popular?api_key=${key}`,
  tvTrending: `${url}/trending/tv/week?api_key=${key}`,
  tvAiringToday: `${url}/tv/airing_today?api_key=${key}`,
  tvAnime: `${url}/discover/tv?api_key=${key}&with_genres=16`,
  rvDefault: `${url}/tv/top_rated?api_key=${key}`,
};

export default endpoints;

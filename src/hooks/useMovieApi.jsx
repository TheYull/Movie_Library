import { API_KEY, BASE_URL } from "../config/config";
import { useEffect, useState } from "react";

export const useMovieApi = () => {
  const api_url_movie = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1`;
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(api_url_movie)
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
      .catch((err) => console.error("Error fetching movies:", err));
  };
  useEffect(() => {
    getMovie();
  }, []);
  return movieList;
};

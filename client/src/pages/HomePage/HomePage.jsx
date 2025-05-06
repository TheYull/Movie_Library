import React from "react";
import { MovieCard } from "../../features/movies/MovieCard";
import { CarouselPlugin } from "../../components/CarouselPlugin/CarouselPlugin";
import PaginatedList from "../../components/Pagination/PaginatedList";
import { API_KEY, BASE_URL } from "../../config/config";

export const HomePage = () => {

  return (
    <div className="container media">
      <CarouselPlugin />

    <PaginatedList
      endpoint={`${BASE_URL}/movie/popular?api_key=${API_KEY}`}
      renderItem={(movie) => <MovieCard key={movie.id} movie={movie} />}
    /> 
    </div>
  );
};

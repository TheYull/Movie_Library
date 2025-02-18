import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../../features/content/contentApi";
import { MovieCard } from "../../features/movies/MovieCard";
import { TVShowCard } from "../../features/tvshows/TVShowCard"
import PaginationRounded from "../../components/PaginationRounded/PaginationRounded";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { movies, tvshows, loading, error } = useSelector((state) => state.content);

   useEffect(() => {
    dispatch(fetchContent({ type: "movie", category: "popular" }));
    dispatch(fetchContent({ type: "tv", category: "popular" })); 
  }, [dispatch]);

  if (loading) return <div>Завантаження...</div>;
  if (error) return <div>Помилка: {error}</div>;

  return (
    <div className="container">
      <h1 className="headline">Now popular</h1>
      <div className="subheader">
      {movies && movies.length > 0 ? (
                movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} id={movie.id}  />
                ))
            ) : (
                <div>Фільми відсутні.</div>
            )}
      {tvshows && tvshows.length > 0 ? (
                tvshows.map((tv) => (
                    <TVShowCard key={tv.id} tv={tv} id={tv.id}  />
                ))
            ) : (
                <div>Серіали відсутні.</div>
            )}
            <PaginationRounded />
      </div>
    </div>
  );
};

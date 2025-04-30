import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { DETAILED_IMG_BACKGROUND, IMG_URL } from "../../config/config";
import "./CarouselPlugin.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/movies/moviesSlice";

export const CarouselPlugin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movieList = useSelector((state) => state.movies.movieList);
  const status = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

  const latestMovies = movieList.slice(0, 5);

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {latestMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="movie_background"
              style={{
                backgroundImage: `url(${`${DETAILED_IMG_BACKGROUND}${movie.backdrop_path}`})`,
                backgroundSize: "cover",
              }}
            >
              <div
                className="movie_card"
                onClick={() => handleMovieClick(movie)}
              >
                <div className="wrapper">
                  <div className="img_container">
                    <img
                      src={`${IMG_URL}${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </div>
                  <div className="text_container">
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

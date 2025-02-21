import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { API_KEY, BASE_URL, DETAILED_IMG_BACKGROUND, IMG_URL } from '../../config/config';
import './CarouselPlugin.scss';
import { useNavigate } from 'react-router-dom';


export const CarouselPlugin = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}`);
};

  useEffect(() => {
    const fetchSelectedMovies = async () => {
      const movieIds = [939243, 762509, 993710, 1138194, 1241982];

      const moviePromises = movieIds.map(async (movieId) => {
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        return response.json();
      })
      const moviesData = await Promise.all(moviePromises);
      setMovies(moviesData);
    }

    fetchSelectedMovies();
  },[])

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
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} >
            <div className="movie_background" style={{ backgroundImage: `url(${`${DETAILED_IMG_BACKGROUND}${movie.backdrop_path}`})`, backgroundSize: 'cover' }}>
            <div className="movie_card" onClick={() => handleMovieClick(movie)}>
              <div className="wrapper">
                <div className="img_container">
                <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
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
  )
}
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CardSlider.scss';
import { Navigation, Pagination, Mousewheel, Keyboard  } from 'swiper/modules';
import { Card } from '../../Card'; 

const CardSlider = ({ items, type }) => {
    
  return (
    <div className="card-slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              id={item.id}
              image={
                type === 'person'
                  ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                  : `https://image.tmdb.org/t/p/w300${item.poster_path}`
              }
              title={item.name || item.title}
              type={type}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="slider-buttons">
        <button ref={navigationPrevRef} className="slider-button prev">
          Назад
        </button>
        <button ref={navigationNextRef} className="slider-button next">
          Вперед
        </button>
      </div> */}
    </div>
  );
};

export default CardSlider;
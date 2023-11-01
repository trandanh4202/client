import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import { Box } from '@mui/material';
const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      lazy={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }}
      pagination={{
        clickable: true,
      }}
      //   navigation={true}
      modules={[Pagination, Autoplay]}
      className="banner-swiper"
    >
      <SwiperSlide style={{ width: '358px', overflow: 'hidden', borderRadius: '10px' }}>
        <img loading="lazy" alt="a" src="./images/Banner/Banner_1.webp" style={{ width: '100%', height: '100%' }} />
      </SwiperSlide>
      <SwiperSlide style={{ width: '358px', overflow: 'hidden', borderRadius: '10px' }}>
        <img loading="lazy" alt="a" src="./images/Banner/Banner_2.webp" style={{ width: '100%', height: '100%' }} />
      </SwiperSlide>
      <SwiperSlide style={{ width: '358px', overflow: 'hidden', borderRadius: '10px' }}>
        <img loading="lazy" alt="a" src="./images/Banner/Banner_3.webp" style={{ width: '100%', height: '100%' }} />
      </SwiperSlide>
      <SwiperSlide style={{ width: '358px', overflow: 'hidden', borderRadius: '10px' }}>
        <img loading="lazy" alt="a" src="./images/Banner/Banner_4.webp" style={{ width: '100%', height: '100%' }} />
      </SwiperSlide>
      <SwiperSlide style={{ width: '358px', overflow: 'hidden', borderRadius: '10px' }}>
        <img loading="lazy" alt="a" src="./images/Banner/Banner_5.webp" style={{ width: '100%', height: '100%' }} />
      </SwiperSlide>
      <SwiperSlide style={{ width: '358px', overflow: 'hidden', borderRadius: '10px' }}>
        <img loading="lazy" alt="a" src="./images/Banner/Banner_6.webp" style={{ width: '100%', height: '100%' }} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

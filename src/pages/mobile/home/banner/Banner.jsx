import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
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
      className="mySwiper"
    >
      <SwiperSlide>
        <img loading="lazy" alt="a" src="./images/Banner/Banner_1.webp" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" alt="a" src="./logo.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" alt="a" src="./logo.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" alt="a" src="./logo.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" alt="a" src="./logo.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" alt="a" src="./logo.png" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

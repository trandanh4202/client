import { Box, Paper } from '@mui/material';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const SliderProduct = () => {
  const colors = ['xanh', 'do', 'tim', 'vang'];
  const [swiper1, setSwiper1] = useState(null);

  const [swiper2, setSwiper2] = useState(null);
  return (
    <Paper
      sx={{
        padding: '10px',
      }}
      elevation={8}
      square={false}
    >
      <Swiper
        onSwiper={(swiper) => {
          setSwiper2(swiper);
        }}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        lazy={true}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: swiper1 }}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiperSingle"
      >
        {colors.map((color, index) => (
          <SwiperSlide key={index}>
            <img src={`./ip_${color}.png`} alt={`Color ${index + 1}`} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <img loading="lazy" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={(swiper) => {
          setSwiper1(swiper);
        }}
        loop={true}
        lazy={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiperSingleAlbum"
      >
        {colors.map((color, index) => (
          <SwiperSlide key={index}>
            <img src={`./ip_${color}.png`} alt={`Color ${index + 1}`} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <img loading="lazy" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper>
    </Paper>
  );
};

export default SliderProduct;

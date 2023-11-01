import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CardNews from '~/components/cardNews/CardNews';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const News = (props) => {
  const news = [
    {
      title: 'Danh',
      description: 'Danh ne',
    },
    {
      title: 'Cuong',
      description: 'Cuong ne',
    },
    {
      title: 'Khai',
      description: 'Khai ne',
    },
    {
      title: 'Khai',
      description: 'Khai ne',
    },
  ];
  return (
    <>
      <Box sx={{ marginTop: '40px' }}>
        <Paper sx={{ padding: '10px' }}>
          <Typography sx={{ fontSize: '20px', fontWeight: '600', textTransform: 'uppercase' }}>
            Tin công nghệ
          </Typography>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            loop={true}
            lazy={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            //   navigation={true}
            modules={[Pagination, Autoplay]}
            className="slide-new-wraper"
          >
            <SwiperSlide className="slider-new-item">
              <img
                loading="lazy"
                alt="a"
                src="./images/news/New_1.webp"
                style={{ width: '100%', height: '140px', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide className="slider-new">
              <img
                loading="lazy"
                alt="a"
                src="./images/news/New_2.webp"
                style={{ width: '100%', height: '140px', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide className="slider-new">
              <img
                loading="lazy"
                alt="a"
                src="./images/news/New_3.webp"
                style={{ width: '100%', height: '140px', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide className="slider-new">
              <img
                loading="lazy"
                alt="a"
                src="./images/news/New_4.webp"
                style={{ width: '100%', height: '140px', objectFit: 'cover' }}
              />
            </SwiperSlide>
          </Swiper>
        </Paper>
      </Box>
    </>
  );
};

export default News;

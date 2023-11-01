import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import ProductCard from '~/components/productCard/ProductCard';
import ProductCardSale from '~/components/productCardSale/ProductCardSale';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Sales = () => {
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
    {
      title: 'Khai',
      description: 'Khai ne',
    },
    {
      title: 'Khai',
      description: 'Khai ne',
    },
    {
      title: 'Khai',
      description: 'Khai ne',
    },
    {
      title: 'Khai',
      description: 'Khai ne',
    },
    {
      title: 'Khai',
      description: 'Khai ne',
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
    <Container
      sx={{
        backgroundColor: 'white',
        marginTop: '40px',
        padding: '0px !important',
      }}
    >
      <FlexBetween
        sx={{
          flexDirection: 'column',
          backgroundColor: '#920101',
        }}
      >
        <Typography component="div" sx={{ width: '100%' }}>
          <img alt="1" src="./khungsale.webp" style={{ width: '100%' }} />
        </Typography>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper slider-sale-wrapper"
        >
          {news.map((item) => (
            <SwiperSlide className="slider-sale-item">
              <ProductCardSale title={item.title} description={item.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </FlexBetween>
    </Container>
  );
};

export default Sales;

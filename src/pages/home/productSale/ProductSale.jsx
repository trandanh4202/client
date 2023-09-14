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

const ProductSale = () => {
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
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
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
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          style={{
            padding: '40px',
          }}
        >
          {news.map((item) => (
            <SwiperSlide>
              <ProductCardSale title={item.title} description={item.description} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <
        Grid container backgroundColor="#920101">
          {news.map((item) => (
            <Grid item xs={6} md={6} lg={2.4} padding="5px" margin="10px 0px ">
              <ProductCardSale title={item.title} description={item.description} />
            </Grid>
          ))}
          <Typography
            variant="h4"
            sx={{
              textTransform: 'uppercase',
              wordSpacing: '5px',
              margin: '15px 0',
            }}
          >
            Sản phẩm nổi bật
          </Typography>
        </Grid> */}
      </FlexBetween>
    </Container>
  );
};

export default ProductSale;

import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import ProductCard from '~/components/productCard/ProductCard';
import ProductCardSale from '~/components/productCardSale/ProductCardSale';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '~/features/products/productsSlice';
import { getCategories } from '~/features/category/categoriesSlice';
import { getSliders } from '~/features/slider/SlidersSlice';

const ProductSale = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
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
          q
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
              padding: '0 40px 20px 40px',
            }}
          >
            {products?.map((item) => (
              <SwiperSlide>
                <ProductCardSale
                  id={item.id}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  basePrice={item.basePrice}
                  price={item.price}
                  percentSale={item.percentSale}
                  quantity={item.quantity}
                  soldQuantity={item.soldQuantity}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </FlexBetween>
      </Container>
    </>
  );
};

export default ProductSale;

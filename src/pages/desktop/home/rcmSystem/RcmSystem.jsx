import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSliders } from '~/features/slider/SlidersSlice';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Divider, Typography } from '@mui/material';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import ProductCard from '~/components/productCard/ProductCard';
import { Link } from 'react-router-dom';
import { KeyboardArrowRight } from '@mui/icons-material';
import { getRcmSystem } from '~/features/recommendSystem/RecommendSystemSlice';
const RcmSystem = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.rcmSystem.products);
  const token = useSelector((state) => state.auth.account.token);
  useEffect(() => {
    dispatch(getRcmSystem());
  }, [dispatch]);
  return (
    <>
      {token && products && (
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
              backgroundImage: `url(https://lh3.googleusercontent.com/3rZsw1bqnjy7OelGd2jVO3Bz4m_ameEBUNed-V6DNn6WqZmAMvWUB3PnEMdPLCRTQqrfV3o5Q3DHzwHxv9LZN7fX_LQ4yH0gKQ=w1232)`,
            }}
          >
            <Box sx={{ width: '100%' }}>
              <FlexBetween sx={{ padding: '10px', margin: '10px 20px' }}>
                <Typography
                  component={Link}
                  sx={{
                    fontWeight: '700',
                    textDecoration: 'unset',
                    fontSize: '20px',
                    lineHeight: '28px',
                    transition: 'color 0.3s ease 0s',
                    color: 'white',
                    textTransform: 'uppercase',
                  }}
                >
                  Gợi ý cho bạn
                </Typography>
              </FlexBetween>
            </Box>
            <Divider />
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
              {products.map((item) => (
                <SwiperSlide>
                  <ProductCard
                    id={item.id}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    basePrice={item.basePrice}
                    price={item.basePrice}
                    percentSale={item.percentSale}
                    quantity={item.quantity}
                    averageRating={item.averageRating}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </FlexBetween>
        </Container>
      )}
    </>
  );
};

export default RcmSystem;

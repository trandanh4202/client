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
const Sliders = () => {
  const dispatch = useDispatch();
  const sliders = useSelector((state) => state.sliders.sliders);
  useEffect(() => {
    dispatch(getSliders());
  }, [dispatch]);
  return (
    <>
      {sliders.map((slider, index) => (
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
              backgroundImage: `url(./images/slider/slider_${index + 1}.jpg)`,
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
                  {slider.title}
                </Typography>
                <Box
                  component={Link}
                  sx={{
                    fontWeight: '700',
                    textDecoration: 'unset',
                    fontSize: '20px',
                    lineHeight: '28px',
                    transition: 'color 0.3s ease 0s',
                    color: 'white',
                    display: 'flex',
                  }}
                >
                  <Typography component={Link} to={`store?q=${slider.title}`}>
                    Xem tất cả
                  </Typography>
                  <KeyboardArrowRight />
                </Box>
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
              {slider.products.map((item) => (
                <SwiperSlide>
                  <ProductCard
                    imageUrl={item.imageUrl}
                    name={item.name}
                    basePrice={item.basePrice}
                    price={item.price}
                    percentSale={item.percentSale}
                    quantity={item.quantity}
                    averageRating={item.averageRating}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </FlexBetween>
        </Container>
      ))}
    </>
  );
};

export default Sliders;

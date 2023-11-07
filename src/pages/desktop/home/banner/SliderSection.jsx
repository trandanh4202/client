import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import { Box, Container, Grid } from '@mui/material';
const SliderSection = () => {
  return (
    <>
      {/* <Container> */}
      <Box sx={{ position: 'relative', contentVisibility: 'auto', marginBottom: '24px' }}>
        <Container sx={{ marginTop: '0px', padding: { lg: '0px' } }}>
          <Box sx={{ height: { lg: '566px', xs: '200px' } }}>
            <Grid container sx={{ overflow: 'hidden', height: '566px' }}>
              <Grid item lg={2} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
              <Grid item lg={8} xs={12}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  lazy={true}
                  // autoplay={{
                  //   delay: 2000,
                  //   disableOnInteraction: false,
                  // }}
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
                      pagination: {
                        clickable: true,
                      },
                    },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  //   navigation={true}
                  modules={[Pagination, Autoplay]}
                  className="sliderBanner"
                >
                  <SwiperSlide style={{ height: '100%', width: '100%' }}>
                    <img
                      loading="lazy"
                      alt="a"
                      src="./images/Banner/Banner_DK_1.webp"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: '100%', width: '100%' }}>
                    <img
                      loading="lazy"
                      alt="a"
                      src="./images/Banner/Banner_DK_2.webp"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: '100%', width: '100%' }}>
                    <img
                      loading="lazy"
                      alt="a"
                      src="./images/Banner/Banner_DK_3.webp"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: '100%', width: '100%' }}>
                    <img
                      loading="lazy"
                      alt="a"
                      src="./images/Banner/Banner_DK_4.webp"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: '100%', width: '100%' }}>
                    <img
                      loading="lazy"
                      alt="a"
                      src="./images/Banner/Banner_DK_5.webp"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: '100%', width: '100%' }}>
                    <img
                      loading="lazy"
                      alt="a"
                      src="./images/Banner/Banner_DK_6.webp"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </SwiperSlide>
                </Swiper>
              </Grid>
              <Grid
                item
                lg={2}
                sx={{
                  position: 'relative',
                  maxWidth: '100%',
                  padding: '3px',
                  display: { xs: 'none', lg: 'block' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '15px',
                    paddingTop: '15px',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      display: 'flex',
                    }}
                  >
                    <img
                      src="./images/Banner/Banner_DK_Gif1.gif"
                      alt=""
                      style={{ width: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      display: 'flex',
                    }}
                  >
                    <img
                      src="./images/Banner/Banner_DK_Gif2.gif"
                      alt=""
                      style={{ width: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginTop: '-75px', position: 'relavtive', display: { xs: 'none', lg: 'flex' } }}>
            <Grid container>
              <Grid
                item
                lg={3}
                sx={{
                  padding: '5px',
                  cursor: 'pointer',
                  '&:hover': { transform: 'scale(1.05)', transition: 'all 0.3s linear' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',

                    overflow: 'hidden',
                    borderRadius: '8px',
                    display: 'flex',
                  }}
                >
                  <img
                    src="./images/Banner/Banner_DK_7.webp"
                    alt="banner"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                lg={3}
                sx={{
                  padding: '5px',
                  cursor: 'pointer',
                  '&:hover': { transform: 'scale(1.05)', transition: 'all 0.3s linear' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',

                    overflow: 'hidden',
                    borderRadius: '8px',
                    display: 'flex',
                  }}
                >
                  <img
                    src="./images/Banner/Banner_DK_8.webp"
                    alt="banner"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                lg={3}
                sx={{
                  padding: '5px',
                  cursor: 'pointer',
                  '&:hover': { transform: 'scale(1.05)', transition: 'all 0.3s linear' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    display: 'flex',

                    transition: 'transform 0.3s ease 0s',
                  }}
                >
                  <img
                    src="./images/Banner/Banner_DK_9.webp"
                    alt="banner"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                lg={3}
                sx={{
                  padding: '5px',
                  cursor: 'pointer',
                  '&:hover': { transform: 'scale(1.05)', transition: 'all 0.3s linear' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',

                    overflow: 'hidden',
                    borderRadius: '8px',
                    display: 'flex',

                    cursor: 'pointer',
                    '&:hover': { transform: 'scale(1.05)', transition: 'all 0.3s linear' },
                  }}
                >
                  <img
                    src="./images/Banner/Banner_DK_10.webp"
                    alt="banner"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* </Container> */}
    </>
  );
};

export default SliderSection;

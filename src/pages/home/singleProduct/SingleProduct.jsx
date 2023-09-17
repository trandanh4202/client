import { Box, Button, Container, Grid, Paper, Rating, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import styles from './singleproduct.module.scss';
import FlexBetween from '~/components/flexbetween/FlexBetween';
const SingleProduct = () => {
  const colors = ['xanh', 'do', 'tim', 'vang'];
  const [swiper1, setSwiper1] = useState(null);
  const [swiper2, setSwiper2] = useState(null);
  const list = ['1', '2', '3'];
  const [quantity, setQuantity] = useState(1);

  return (
    <Container
      sx={{
        marginTop: '40px',
        marginBottom: '40px',
      }}
    >
      <Grid container>
        <Grid item xs={12} md={4} lg={4} padding="15px">
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
        </Grid>
        <Grid item xs={12} md={8} lg={8} padding="15px">
          <Paper
            sx={{
              padding: '20px',
            }}
            elevation={8}
            square={false}
          >
            <Typography variant="h4" gutterBottom>
              Iphone 14 Pro max
            </Typography>
            <Typography variant="subtitle" gutterBottom>
              iPhone 14 Pro Max sở hữu thiết kế màn hình Dynamic Island ấn tượng cùng màn hình OLED 6,7 inch hỗ trợ
              always-on display và hiệu năng vượt trội với chip A16 Bionic. Bên cạnh đó máy còn sở hữu nhiều nâng cấp về
              camera với cụm camera sau 48MP, camera trước 12MP dùng bộ nhớ RAM 6GB đa nhiệm vượt trội
            </Typography>
            <Box sx={{ margin: '10px 0', display: 'flex', gap: '10px' }}>
              {colors.map((color, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    const swiper1Slides = swiper1?.slides;
                    swiper1Slides.forEach((slide) => {
                      slide.classList.remove('swiper-slide-thumb-active');
                    });
                    swiper1Slides[index].classList.add('swiper-slide-thumb-active');
                    swiper1.slideTo(index);
                    swiper2.slideTo(index);
                  }}
                  variant="outlined"
                >
                  {color}
                </Button>
              ))}
            </Box>
            <Typography
              variant="h5"
              sx={{
                color: '#E30019',
                fontWeight: '600',
                fontSize: '25px',
              }}
              gutterBottom
            >
              10.000.000 đ
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textDecorationLine: 'line-through',
                fontWeight: '600',

                fontSize: '20px',
              }}
              gutterBottom
            >
              20.000.000 đ
            </Typography>
            <Rating name="read-only" value={3} readOnly />
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                margin: '10px 0',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: '500',
                  color: 'black',
                }}
              >
                Số lượng
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                  {list.map((value, index) => (
                    <MenuItem key={index} value={index}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                padding: '22px 40px',
              }}
            >
              Thêm vào giỏ hàng
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Paper sx={{ padding: '15px' }} elevation={8} square={false}>
        <Typography variant="h4" sx={{ fontWeight: '600' }}>
          Nhận xét
        </Typography>
        <Box
          sx={{
            backgroundColor: '#aee6ff',
            padding: '10px',
            margin: '5px 0',
          }}
        >
          <Typography variant="h5" sx={{ fontSize: '30px', fontWeight: '500' }}>
            Danh
          </Typography>
          <Rating name="read-only" value={3} readOnly />
          <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: '400' }}>
            Sản phẩm tốt
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#aee6ff',
            padding: '10px',
            margin: '5px 0',
          }}
        >
          <Typography variant="h5" sx={{ fontSize: '30px', fontWeight: '500' }}>
            Danh
          </Typography>
          <Rating name="read-only" value={3} readOnly />
          <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: '400' }}>
            Sản phẩm tốt
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SingleProduct;

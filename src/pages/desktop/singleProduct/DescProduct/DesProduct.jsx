import { Box, Button, FormControl, MenuItem, Paper, Rating, Select, Typography } from '@mui/material';
import React, { useState } from 'react';

const DesProduct = () => {
  const list = ['1', '2', '3'];
  const [quantity, setQuantity] = useState(1);
  const colors = ['xanh', 'do', 'tim', 'vang'];
  const [swiper1, setSwiper1] = useState(null);
  const [swiper2, setSwiper2] = useState(null);
  return (
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
        iPhone 14 Pro Max sở hữu thiết kế màn hình Dynamic Island ấn tượng cùng màn hình OLED 6,7 inch hỗ trợ always-on
        display và hiệu năng vượt trội với chip A16 Bionic. Bên cạnh đó máy còn sở hữu nhiều nâng cấp về camera với cụm
        camera sau 48MP, camera trước 12MP dùng bộ nhớ RAM 6GB đa nhiệm vượt trội
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
  );
};

export default DesProduct;

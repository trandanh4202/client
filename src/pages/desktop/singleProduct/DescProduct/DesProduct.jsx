import { Box, Button, FormControl, MenuItem, Paper, Rating, Select, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCartItems } from '~/features/cartItems/cartItemsSlice';

const DesProduct = (props) => {
  const { id, name, description, price, basePrice, percentSale, averageRating, quantity } = props;
  const list = ['1', '2', '3'];
  const [qtt, setQtt] = useState(1);
  const colors = ['xanh', 'do', 'tim', 'vang'];
  const [swiper1, setSwiper1] = useState(null);
  const [swiper2, setSwiper2] = useState(null);
  const dispatch = useDispatch();
  const [qty, setQty] = useState('1');
  const handleAddCartItem = () => {
    dispatch(addCartItems({ productId: id, quantity: qty }));
  };
  // const handleQtyChange = (itemId, newQty) => {
  //   const updatedCartItems = cartItems.map((item) => {
  //     if (item.id === itemId) {
  //       return {
  //         ...item,
  //         quantity: Math.min(Math.max(newQty, 1), item.quantity),
  //       };
  //     }
  //     return item;
  //   });
  //   // setCartItems(updatedCartItems);
  // };
  return (
    <Paper
      sx={{
        padding: '20px',
      }}
      elevation={8}
      square={false}
    >
      <Typography variant="h4" gutterBottom sx={{ fontSize: '20px', fontWeight: '700' }}>
        {name}
      </Typography>
      <Typography gutterBottom sx={{ fontSize: '13px', textAlign: 'justify' }}>
        {description}
      </Typography>
      <Box sx={{ margin: '10px 0', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
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
        {price}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textDecorationLine: 'line-through',
          fontWeight: '600',

          fontSize: { xs: '15px', lg: '20px' },
        }}
        gutterBottom
      >
        {basePrice}
      </Typography>
      <Rating name="read-only" value={averageRating} readOnly />
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
            fontSize: { xs: '15px', lg: '20px' },
          }}
        >
          Số lượng
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select value={qty} onChange={(e) => setQty(e.target.value)}>
            {Array.from({ length: quantity }, (_, index) => (
              <MenuItem key={index} value={index + 1} onChange={(e) => setQty(e.target.value)}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        size="large"
        sx={{
          padding: { lg: '22px 40px', xs: '10px' },
        }}
        onClick={handleAddCartItem}
      >
        Thêm vào giỏ hàng
      </Button>
    </Paper>
  );
};

export default DesProduct;

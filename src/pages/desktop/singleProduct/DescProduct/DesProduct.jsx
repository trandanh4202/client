import { Box, Button, FormControl, MenuItem, Paper, Rating, Select, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addCartItems } from '~/features/cartItems/cartItemsSlice';
import 'react-toastify/dist/ReactToastify.css';

export const formatStringToMoney = (str) => {
  const stringFormat = typeof str === 'string' ? parseInt(str, 10) : str;
  const result = stringFormat?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).slice(0, -3);
  return (isNaN(parseFloat(result)) ? '0 ' : result) + 'đ';
};
const DesProduct = (props) => {
  const { id, name, description, price, basePrice, percentSale, averageRating, quantity } = props;
  const [swiper1, setSwiper1] = useState(null);
  const [swiper2, setSwiper2] = useState(null);
  const dispatch = useDispatch();
  const [qty, setQty] = useState('1');
  const status = useSelector((state) => state.cartItems);
  const { message, loading } = status;
  const [action, setAction] = useState(false);
  const handleAddCartItem = () => {
    dispatch(addCartItems({ productId: id, quantity: qty }));
    setAction(true);
  };

  useEffect(() => {
    if (message === 'Update quantity to cart successful!' && action === true) {
      toast.success('Đã thêm vào giỏ hàng', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setAction(false);
    } else if (message === 'Quantity exeed' && action === true) {
      toast.error('Đã thêm vào giỏ hàng', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setAction(false);
    }
  }, [message, action]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />{' '}
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

        <Typography
          variant="h5"
          sx={{
            color: '#E30019',
            fontWeight: '600',
            fontSize: '25px',
          }}
          gutterBottom
        >
          {formatStringToMoney(price)}
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
          {formatStringToMoney(basePrice)}
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
    </>
  );
};

export default DesProduct;

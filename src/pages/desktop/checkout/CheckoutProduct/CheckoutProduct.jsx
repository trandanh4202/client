import { Badge, Box, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '~/features/cartItems/cartItemsSlice';

const CheckoutProduct = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  return (
    <Paper sx={{ padding: '20px', border: '2px solid #ebebeb' }}>
      {cartItems.map((item) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex' }}>
            <Badge badgeContent={1} color="primary">
              <Box
                sx={{
                  width: '82px',
                  height: '82px',
                  border: '1px solid #f3f3f3',
                }}
              >
                <img alt={item.product.name} src={item.product.imageUrl} style={{ width: '100%', height: 'auto' }} />
              </Box>
            </Badge>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '20px',
              }}
            >
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '15px',
                }}
              >
                {item.product.name}
              </Typography>
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: '13px',
                }}
              >
                {item.product.price}
              </Typography>
              <Typography>x{item.quantity}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default CheckoutProduct;

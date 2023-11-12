import { Badge, Box, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import { getCartItems } from '~/features/cartItems/cartItemsSlice';
export const formatStringToMoney = (str) => {
  const stringFormat = typeof str === 'string' ? parseInt(str, 10) : str;
  const result = stringFormat?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).slice(0, -3);
  return (isNaN(parseFloat(result)) ? '0 ' : result) + 'đ';
};
const OrderDetailProduct = () => {
  const cartItems = useSelector((state) => state.orderDetail.detail.cartItems);

  return (
    <Paper sx={{ padding: '20px', border: '2px solid #ebebeb' }}>
      {cartItems?.map((item) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex' }}>
            <Badge badgeContent={1} color="primary">
              <Box
                sx={{
                  height: '82px',
                  border: '1px solid #f3f3f3',
                }}
              >
                <img
                  alt={item.product.name}
                  src={item.product.imageUrl}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>
            </Badge>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '20px',
                width: '100%',
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
              <FlexBetween sx={{ width: '100%' }}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '13px',
                    }}
                  >
                    {formatStringToMoney(item.price)}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '13px',
                    }}
                  >
                    x{item.quantity}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: '600',
                    }}
                  >
                    {formatStringToMoney(item.quantity * item.price)}
                  </Typography>
                </Box>
              </FlexBetween>
            </Box>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default OrderDetailProduct;

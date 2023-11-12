import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';

import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderDetail } from '~/features/orderDetail/OrderDetailSlice';
export const formatStringToMoney = (str) => {
  const stringFormat = typeof str === 'string' ? parseInt(str, 10) : str;
  const result = stringFormat?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).slice(0, -3);
  return (isNaN(parseFloat(result)) ? '0 ' : result) + 'đ';
};

const OrderDetailPayment = () => {
  const orderFee = useSelector((state) => state.orders.order);
  const [active, setActive] = useState('VNPAY'); // Địa chỉ mặc định

  return (
    <Paper sx={{ padding: '10px' }}>
      <FlexBetween>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '15px',
          }}
        >
          Tiền sản phẩm:
        </Typography>
        <Typography sx={{ fontSize: '13px', fontWeight: '500' }}>{formatStringToMoney(orderFee.subTotal)}</Typography>
      </FlexBetween>
      <Divider sx={{ margin: '20px' }} />
      <FlexBetween>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '15px',
          }}
        >
          Tiền vận chuyển:
        </Typography>
        <Typography sx={{ fontSize: '13px', fontWeight: '500' }}>
          {formatStringToMoney(orderFee.shippingFee)}
        </Typography>
      </FlexBetween>
      <Divider sx={{ margin: '20px' }} />

      <FlexBetween>
        <Typography
          sx={{
            fontWeight: '700',
            color: 'black',
          }}
        >
          Tổng tiền
        </Typography>
        <Typography
          sx={{
            fontWeight: '700',
            color: '#f61900',
          }}
        >
          {formatStringToMoney(orderFee.total)}
        </Typography>
      </FlexBetween>
      <Divider sx={{ margin: '20px' }} />
      <Typography sx={{ fontSize: '13px' }}>- ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 15 ngày</Typography>
      <Typography sx={{ fontSize: '13px' }}>- Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</Typography>
    </Paper>
  );
};

export default OrderDetailPayment;

import { Box, Button, FormControlLabel, List, ListItem, Modal, Paper, Radio, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from 'react-redux';
import { getAddressById, getAddresses } from '~/features/address/addressSlice';
import { getOrderById } from '~/features/order/orderSlice';
import { useParams } from 'react-router-dom';

const OrderDetailInfo = () => {
  const address = useSelector((state) => state.orders?.order?.address);

  return (
    <Paper
      sx={{
        padding: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          //   justifyContent: 'center',
          color: '#f61900',
        }}
      >
        <LocationOnIcon />
        <Typography sx={{ fontSize: { xs: '15px', lg: '20px' }, fontWeight: '700' }}>Thông tin nhận hàng</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Typography sx={{ fontSize: { xs: '13px', lg: '15px' } }}>
          {address?.detail}, {address?.wardName}, {address?.districtName}, {address?.provinceName}
        </Typography>
      </Box>
    </Paper>
  );
};

export default OrderDetailInfo;

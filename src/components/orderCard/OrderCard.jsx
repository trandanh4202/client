import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import FlexBetween from '../flexbetween/FlexBetween';

const OrderCard = () => {
  return (
    <>
      <FlexBetween
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 20px',
        }}
      >
        <FlexBetween>
          <Box>
            <img src="/logo.png" alt="1" width="120px" />
          </Box>
          <Box sx={{ marginLeft: '20px' }}>
            <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>Iphone 14 Pro max</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>Phân loại: 128GB</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>Màu sắc: vàng</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>X1</Typography>
          </Box>
        </FlexBetween>
        <Box>
          <Typography>Đang chờ xác nhận</Typography>
          <Typography
            sx={{
              color: '#E30019',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            2.000.000 đ
          </Typography>
        </Box>
      </FlexBetween>
      <Divider />
      <FlexBetween
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 20px',
        }}
      >
        <FlexBetween>
          <Box>
            <img src="/logo.png" alt="1" width="120px" />
          </Box>
          <Box sx={{ marginLeft: '20px' }}>
            <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>Iphone 14 Pro max</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>Phân loại: 128GB</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>Màu sắc: vàng</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>X1</Typography>
          </Box>
        </FlexBetween>
        <Box>
          <Typography>Đang chờ xác nhận</Typography>
          <Typography
            sx={{
              color: '#E30019',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            2.000.000 đ
          </Typography>
        </Box>
      </FlexBetween>
      <Divider />
      <FlexBetween
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 20px',
        }}
      >
        <FlexBetween>
          <Box>
            <img src="/logo.png" alt="1" width="120px" />
          </Box>
          <Box sx={{ marginLeft: '20px' }}>
            <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>Iphone 14 Pro max</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>Phân loại: 128GB</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>Màu sắc: vàng</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>X1</Typography>
          </Box>
        </FlexBetween>
        <Box>
          <Typography>Đang chờ xác nhận</Typography>
          <Typography
            sx={{
              color: '#E30019',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            2.000.000 đ
          </Typography>
        </Box>
      </FlexBetween>
      <Divider />
      <FlexBetween
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 20px',
        }}
      >
        <FlexBetween>
          <Box>
            <img src="/logo.png" alt="1" width="120px" />
          </Box>
          <Box sx={{ marginLeft: '20px' }}>
            <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>Iphone 14 Pro max</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>Phân loại: 128GB</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>Màu sắc: vàng</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>X1</Typography>
          </Box>
        </FlexBetween>
        <Box>
          <Typography>Đang chờ xác nhận</Typography>
          <Typography
            sx={{
              color: '#E30019',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            2.000.000 đ
          </Typography>
        </Box>
      </FlexBetween>
      <Divider />
    </>
  );
};

export default OrderCard;

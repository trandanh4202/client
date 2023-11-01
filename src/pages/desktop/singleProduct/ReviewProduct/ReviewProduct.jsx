import { Box, Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const ReviewProduct = () => {
  return (
    <Paper sx={{ padding: '15px' }} elevation={8} square={false}>
      <Typography variant="h4" sx={{ fontWeight: '600', fontSize: { xs: '20px', lg: '25px' } }}>
        Nhận xét
      </Typography>
      <Box
        sx={{
          backgroundColor: '#aee6ff',
          padding: '10px',
          margin: '5px 0',
        }}
      >
        <Typography variant="h5" sx={{ fontSize: { xs: '17px', lg: '30px' }, fontWeight: '500' }}>
          Danh
        </Typography>
        <Rating name="read-only" value={3} readOnly />
        <Typography variant="h6" sx={{ fontSize: { xs: '15px', lg: '20px' }, fontWeight: '400' }}>
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
        <Typography variant="h5" sx={{ fontSize: { xs: '17px', lg: '30px' }, fontWeight: '500' }}>
          Danh
        </Typography>
        <Rating name="read-only" value={3} readOnly />
        <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: '400' }}>
          Sản phẩm tốt
        </Typography>
      </Box>
    </Paper>
  );
};

export default ReviewProduct;

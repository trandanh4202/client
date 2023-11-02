import { Box, Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const ReviewProduct = (props) => {
  const { reviews } = props;
  return (
    <Paper sx={{ padding: '15px' }} elevation={8} square={false}>
      <Typography variant="h4" sx={{ fontWeight: '600', fontSize: { xs: '20px', lg: '25px' } }}>
        Nhận xét
      </Typography>
      {reviews?.map((review) => (
        <Box
          sx={{
            backgroundColor: '#aee6ff',
            padding: '10px',
            margin: '5px 0',
          }}
        >
          <Typography variant="h5" sx={{ fontSize: { xs: '17px', lg: '30px' }, fontWeight: '500' }}>
            {review.name}
          </Typography>
          <Rating name="read-only" value={review.rating} readOnly />
          <Typography variant="h6" sx={{ fontSize: { xs: '15px', lg: '20px' }, fontWeight: '400' }}>
            {review.comment}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default ReviewProduct;

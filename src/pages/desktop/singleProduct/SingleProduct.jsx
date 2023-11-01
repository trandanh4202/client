import { Container, Grid } from '@mui/material';
import React from 'react';

import SliderProduct from './SliderProduct/SliderProduct';
import DesProduct from './DescProduct/DesProduct';
import ReviewProduct from './ReviewProduct/ReviewProduct';

const SingleProduct = () => {
  return (
    <Container
      sx={{
        marginTop: '20px',
        marginBottom: '40px',
        padding: { xs: '0 0 40px 0' },
      }}
    >
      <Grid container>
        <Grid item xs={12} md={4} lg={4} padding="15px">
          <SliderProduct />
        </Grid>
        <Grid item xs={12} md={8} lg={8} padding="15px">
          <DesProduct />
        </Grid>
      </Grid>
      <ReviewProduct />
    </Container>
  );
};

export default SingleProduct;

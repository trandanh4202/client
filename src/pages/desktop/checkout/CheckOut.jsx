import React from 'react';

import { Container } from '@mui/system';
import { Grid } from '@mui/material';

import CheckoutInfor from './CheckoutInfor/CheckoutInfor';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import CheckoutPayment from './CheckoutPayment/CheckoutPayment';

const CheckOut = () => {
  return (
    <>
      <Container
        sx={{
          marginTop: '40px',
        }}
      >
        <CheckoutInfor />
        <Grid container sx={{ marginTop: '20px', marginBottom: '20px' }}>
          <Grid item xs={12} md={8} lg={8} sx={{ padding: '10px' }}>
            <CheckoutProduct />
          </Grid>
          <Grid item xs={12} md={4} lg={4} sx={{ padding: '10px' }}>
            <CheckoutPayment />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CheckOut;

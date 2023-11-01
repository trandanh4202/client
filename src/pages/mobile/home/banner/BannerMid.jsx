import { Grid } from '@mui/material';
import React from 'react';

const BannerMid = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <img
          src="./images/banner-mid/banner-mid_1.webp"
          alt="banner mid"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Grid>
      <Grid item xs={12}>
        <img
          src="./images/banner-mid/banner-mid_2.webp"
          alt="banner mid"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Grid>
    </Grid>
  );
};

export default BannerMid;

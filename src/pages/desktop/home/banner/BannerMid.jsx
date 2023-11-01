import { Container, Grid } from '@mui/material';
import React from 'react';

const BannerMid = () => {
  return (
    <Container sx={{ marginTop: '40px' }}>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            padding: '5px',
            overFlow: 'hidden',
            '&:hover': { transform: 'scale(1.05)', transition: 'all 0.3s linear' },
          }}
        >
          <img
            src="./images/banner-mid/banner-mid_1.webp"
            alt="banner mid"
            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '15px' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            padding: '5px',
            overFlow: 'hidden',
            '&:hover': { transform: 'scale(1.05)', transition: 'all 0.3s linear' },
          }}
        >
          <img
            src="./images/banner-mid/banner-mid_2.webp"
            alt="banner mid"
            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '15px' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BannerMid;

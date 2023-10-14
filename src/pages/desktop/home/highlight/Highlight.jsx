import { Container, Grid, Paper, Typography, styled } from '@mui/material';
import React from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Highlight = () => {
  return (
    <Container
      sx={{
        backgroundColor: 'white',
        padding: '20px 10px',
        marginTop: '40px',
      }}
    >
      <FlexBetween
        sx={{
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: 'uppercase',
            wordSpacing: '5px',
            margin: '15px 0',
          }}
        >
          Sản phẩm nổi bật
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4} lg={2}>
            <img src="./logo.png" alt="a" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src="./logo.png" alt="a" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src="./logo.png" alt="a" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src="./logo.png" alt="a" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src="./logo.png" alt="a" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src="./logo.png" alt="a" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src="./logo.png" alt="a" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src="./logo.png" alt="a" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src="./logo.png" alt="a" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src="./logo.png" alt="a" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src="./logo.png" alt="a" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src="./logo.png" alt="a" width="100%" />
          </Grid>
        </Grid>
      </FlexBetween>
    </Container>
  );
};

export default Highlight;

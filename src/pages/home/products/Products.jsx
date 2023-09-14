import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import ProductCard from '~/components/productCard/ProductCard';

const Products = () => {
  const news = [
    {
      title: 'Danh',
      description: 'Danh ne',
    },
    {
      title: 'Cuong',
      description: 'Cuong ne',
    },
    {
      title: 'Khai',
      description: 'Khai ne',
    },
    {
      title: 'Khai',
      description: 'Khai ne',
    },
    {
      title: 'Khai',
      description: 'Khai ne',
    },
  ];
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
        <Grid container sx={{ padding: { xs: '0 10px' } }}>
          {news.map((item) => (
            <Grid item xs={6} md={6} lg={2.4} padding="8px" margin="10px 0px ">
              <ProductCard title={item.title} description={item.description} />
            </Grid>
          ))}
        </Grid>
        <Button
          component={Link}
          variant="contained"
          to="/all"
          sx={{
            backgroundColor: '#0a0e11',
          }}
        >
          Xem tất cả
        </Button>
      </FlexBetween>
    </Container>
  );
};

export default Products;

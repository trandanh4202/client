import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import ProductCard from '~/components/productCard/ProductCard';
import { getProducts } from '~/features/products/productsSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products.products);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts({}));
  }, [dispatch]);

  return (
    <Container
      sx={{
        backgroundColor: 'white',
        padding: { xs: '0 0 10px 0', lg: '20px 10px' },
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
            fontSize: { xs: '25px' },
          }}
        >
          Sản phẩm nổi bật
        </Typography>
        <Grid container>
          {products?.map((item) => (
            <Grid item xs={6} md={6} lg={2.4} padding="8px" margin="10px 0px ">
              <ProductCard
                imageUrl={item.imageUrl}
                name={item.name}
                basePrice={item.basePrice}
                price={item.price}
                percentSale={item.percentSale}
                quantity={item.quantity}
                averageRating={item.averageRating}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          component={Link}
          variant="contained"
          to="/store"
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

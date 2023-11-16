import { Container, Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import SliderProduct from './SliderProduct/SliderProduct';
import DesProduct from './DescProduct/DesProduct';
import ReviewProduct from './ReviewProduct/ReviewProduct';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '~/features/singleProduct/singleProductSlice';
import { getImages } from '~/features/images/ImagesSlice';
import { getReviews } from '~/features/reviews/reviewsSlice';
import { getAttribues } from '~/features/attributeProduct/attributeProductSlice';
import DetailProduct from './DetailProduct/DetailProduct';
import { countView } from '~/features/view/countViewSlice';

const SingleProduct = () => {
  window.scrollTo(0, 0);
  let { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct?.product);
  const reviewsList = useSelector((state) => state.reviews.reviews);

  useEffect(() => {
    dispatch(getProductById({ id }));
    dispatch(getImages({ id }));
    dispatch(getReviews({ id }));
    dispatch(getAttribues({ id }));
    // dispatch(countView({ id }));
  }, [dispatch, id]);

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
          <SliderProduct imageUrl={product?.imageUrl} name={product?.name} />
        </Grid>
        <Grid item xs={12} md={8} lg={8} padding="15px">
          <DesProduct
            id={id}
            name={product?.name}
            description={product?.description}
            price={product?.price}
            basePrice={product?.basePrice}
            percentSale={product?.percentSale}
            averageRating={product?.averageRating}
            quantity={product?.quantity}
          />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ReviewProduct reviews={reviewsList.reviews} />
        </Grid>
        <Grid item xs={12} lg={4}>
          {/* <DetailProduct /> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleProduct;

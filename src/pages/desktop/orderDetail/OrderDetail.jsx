import React, { useEffect } from 'react';

import { Container } from '@mui/system';
import { Grid } from '@mui/material';

import CheckoutInfor from './orderDetailInfo/OrderDetailInfo';
import CheckoutProduct from './orderDetailProduct/OrderDetailProduct';
import CheckoutPayment from './orderDetailPaymnet/OrderDetailPayment';
import { useDispatch } from 'react-redux';
import { getOrderDetail } from '~/features/orderDetail/OrderDetailSlice';
import { useParams } from 'react-router-dom';
import { getOrderById } from '~/features/order/orderSlice';
import OrderDetailInfo from './orderDetailInfo/OrderDetailInfo';
import OrderDetailProduct from './orderDetailProduct/OrderDetailProduct';

const OrderDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderDetail(id));
    dispatch(getOrderById(id));
  }, [dispatch, id]);
  return (
    <>
      <Container
        sx={{
          marginTop: '40px',
          padding: '0 4px 40px 0px',
        }}
      >
        <OrderDetailInfo />
        <Grid container sx={{ marginTop: '20px', marginBottom: '20px' }}>
          <Grid item xs={12} md={8} lg={8} sx={{ padding: '10px' }}>
            <OrderDetailProduct />
          </Grid>
          <Grid item xs={12} md={4} lg={4} sx={{ padding: '10px' }}>
            <CheckoutPayment />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OrderDetail;

import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';

import DoneIcon from '@mui/icons-material/Done';
import { useSelect } from '@mui/base';
import { useDispatch, useSelector } from 'react-redux';
import { CaculateOrders } from '~/features/CaculateOrders/CaculateOrdersSlice';
export const formatStringToMoney = (str) => {
  const stringFormat = typeof str === 'string' ? parseInt(str, 10) : str;
  const result = stringFormat?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).slice(0, -3);
  return (isNaN(parseFloat(result)) ? '0 ' : result) + 'đ';
};
const CheckoutPayment = () => {
  const [active, setActive] = useState('VNPAY'); // Địa chỉ mặc định
  const listItem = useSelector((state) => state.cartItems.listItem);
  const addresses = useSelector((state) => state.addresses.addresses);

  const defaultAddress = addresses.find((address) => address?.isDefault);
  const selectedAddress = useSelector((state) => state.addresses?.address);
  const feeOrder = useSelector((state) => state.CaculateOrders?.fee);

  const handlePayment = () => {
    if (active === 'Paypal') {
      console.log('Paypal');
    } else if (active === 'VNPAY') {
      console.log('VNPAY');
    } else {
      console.log('COD');
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const addressId = selectedAddress ? selectedAddress?.id : defaultAddress?.id;
    const productIds = listItem.map((item) => item.productId);
    dispatch(CaculateOrders({ addressId, productIds }));
  }, [dispatch]);
  return (
    <Paper sx={{ padding: '10px' }}>
      <FlexBetween>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '15px',
          }}
        >
          Tiền sản phẩm:
        </Typography>
        <Typography sx={{ fontSize: '13px', fontWeight: '500' }}>{formatStringToMoney(feeOrder?.total)}</Typography>
      </FlexBetween>
      <Divider sx={{ margin: '20px' }} />
      <FlexBetween>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '15px',
          }}
        >
          Tiền vận chuyển:
        </Typography>
        <Typography sx={{ fontSize: '13px', fontWeight: '500' }}>{formatStringToMoney(feeOrder?.ship)}</Typography>
      </FlexBetween>
      <Divider sx={{ margin: '20px' }} />

      <FlexBetween>
        <Typography
          sx={{
            fontWeight: '700',
            color: 'black',
          }}
        >
          Tổng tiền
        </Typography>
        <Typography
          sx={{
            fontWeight: '700',
            color: '#f61900',
          }}
        >
          {formatStringToMoney(feeOrder?.total)}
        </Typography>
      </FlexBetween>
      <Divider sx={{ margin: '20px' }} />
      <Typography sx={{ fontSize: '13px' }}>- ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 15 ngày</Typography>
      <Typography sx={{ fontSize: '13px' }}>- Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</Typography>
      <Grid container>
        <Grid
          item
          lg={6}
          sx={{
            padding: '5px',
          }}
        >
          <Box
            sx={{
              border: '1px solid rgb(224, 224, 224)',
              '&.active-border': {
                border: '1px solid rgb(20, 53, 195);',
              },
              position: 'relative',
              cursor: 'pointer',
            }}
            className={active === 'VNPAY' ? 'active-border' : ''}
            onClick={() => setActive('VNPAY')}
          >
            {active === 'VNPAY' ? (
              <>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-1px',
                    right: '-1px',
                    width: '0px',
                    height: '0px',
                    borderStyle: 'solid',
                    borderWidth: '0px 30px 30px 0px',
                    borderColor: 'transparent rgb(20, 53, 195) transparent transparent',
                  }}
                />
                <DoneIcon
                  sx={{
                    display: 'flex',
                    position: 'absolute',
                    top: '-1px',
                    right: '-1px',
                    zIndex: '0',
                    color: 'white',
                    fontSize: '15px',
                  }}
                />
              </>
            ) : (
              ' '
            )}
            <Typography sx={{ fontSize: '15px', padding: '5px' }}>Thanh toán VNPAY</Typography>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          sx={{
            padding: '5px',
          }}
        >
          <Box
            sx={{
              border: '1px solid rgb(224, 224, 224)',
              '&.active-border': {
                border: '1px solid rgb(20, 53, 195);',
              },
              position: 'relative',
              cursor: 'pointer',
            }}
            className={active === 'Paypal' ? 'active-border' : ''}
            onClick={() => setActive('Paypal')}
          >
            {active === 'Paypal' ? (
              <>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-1px',
                    right: '-1px',
                    width: '0px',
                    height: '0px',
                    borderStyle: 'solid',
                    borderWidth: '0px 30px 30px 0px',
                    borderColor: 'transparent rgb(20, 53, 195) transparent transparent',
                  }}
                />
                <DoneIcon
                  sx={{
                    display: 'flex',
                    position: 'absolute',
                    top: '-1px',
                    right: '-1px',
                    zIndex: '0',
                    color: 'white',
                    fontSize: '15px',
                  }}
                />
              </>
            ) : (
              ' '
            )}
            <Typography sx={{ fontSize: '15px', padding: '5px' }}>Thanh toán Paypal</Typography>
          </Box>
        </Grid>
        <Grid
          item
          lg={12}
          sx={{
            padding: '5px',
          }}
        >
          <Box
            sx={{
              border: '1px solid rgb(224, 224, 224)',
              '&.active-border': {
                border: '1px solid rgb(20, 53, 195);',
              },
              position: 'relative',
              cursor: 'pointer',
            }}
            className={active === 'COD' ? 'active-border' : ''}
            onClick={() => setActive('COD')}
          >
            {active === 'COD' ? (
              <>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-1px',
                    right: '-1px',
                    width: '0px',
                    height: '0px',
                    borderStyle: 'solid',
                    borderWidth: '0px 30px 30px 0px',
                    borderColor: 'transparent rgb(20, 53, 195) transparent transparent',
                  }}
                />
                <DoneIcon
                  sx={{
                    display: 'flex',
                    position: 'absolute',
                    top: '-1px',
                    right: '-1px',
                    zIndex: '0',
                    color: 'white',
                    fontSize: '15px',
                  }}
                />
              </>
            ) : (
              ' '
            )}
            <Typography sx={{ fontSize: '15px', padding: '5px' }}>Thanh toán khi nhận hàng</Typography>
          </Box>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          width: '100%',
          backgroundColor: '#f61900',
          padding: '10px',
          marginTop: '10px',
          '&:hover': {
            backgroundColor: '#f61925',
          },
        }}
        onClick={handlePayment}
      >
        Thanh Toán
      </Button>
    </Paper>
  );
};

export default CheckoutPayment;

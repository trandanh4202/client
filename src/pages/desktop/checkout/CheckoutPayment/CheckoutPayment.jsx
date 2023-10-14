import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';

import DoneIcon from '@mui/icons-material/Done';

const CheckoutPayment = () => {
  const [active, setActive] = useState('VNPAY'); // Địa chỉ mặc định

  const handlePayment = () => {
    if (active === 'Paypal') {
      console.log('Paypal');
    } else if (active === 'VNPAY') {
      console.log('VNPAY');
    } else {
      console.log('COD');
    }
  };
  return (
    <Paper sx={{ padding: '10px' }}>
      <FlexBetween>
        <Typography
          sx={{
            fontWeight: '600',
          }}
        >
          Tiền sản phẩm:
        </Typography>
        <Typography>8.990.000đ</Typography>
      </FlexBetween>
      <Divider sx={{ margin: '20px' }} />
      <FlexBetween>
        <Typography
          sx={{
            fontWeight: '600',
          }}
        >
          Tiền vận chuyển:
        </Typography>
        <Typography>8.990.000đ</Typography>
      </FlexBetween>
      <Divider sx={{ margin: '20px' }} />
      {active === 'COD' ? (
        <>
          <FlexBetween>
            <Typography
              sx={{
                fontWeight: '600',
              }}
            >
              Tiền thu hộ ( COD):
            </Typography>
            <Typography>8.990.000đ</Typography>
          </FlexBetween>
          <Divider sx={{ margin: '20px' }} />
        </>
      ) : (
        ''
      )}
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
          8.990.000đ
        </Typography>
      </FlexBetween>
      <Divider sx={{ margin: '20px' }} />
      <Typography>- ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 15 ngày</Typography>
      <Typography>- Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</Typography>
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

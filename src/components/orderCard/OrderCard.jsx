import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import FlexBetween from '../flexbetween/FlexBetween';
import moment from 'moment';
import { Link } from 'react-router-dom';

const OrderCard = (props) => {
  const { id, status, date, paidAt, total } = props;
  return (
    <>
      <FlexBetween
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: { xs: '5px', lg: '10px 20px' },
        }}
      >
        <FlexBetween>
          <Box>
            <img src="/logo.png" alt="1" width="60px" />
          </Box>
          <Box sx={{ marginLeft: '20px' }}>
            <Typography component={Link} to={`/orders/${id}`} sx={{ fontSize: ' 15px', fontWeight: '600' }}>
              Xem chi tiết{' '}
            </Typography>
            <Typography sx={{ fontSize: ' 13px', fontWeight: '500' }}>
              {status === 'New' ? ' Mới' : 'Đã giao'}
            </Typography>
            <Typography sx={{ fontSize: ' 13px', fontWeight: '500' }}>
              {paidAt && moment(paidAt).format('L')}
            </Typography>
            {/* <Typography sx={{ fontSize: '14px', color: 'grey' }}>Phân loại: 128GB</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>Màu sắc: vàng</Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>X1</Typography> */}
          </Box>
        </FlexBetween>
        <Box>
          {/* <Typography sx={{ fontSize: '10px' }}>Đang chờ xác nhận</Typography> */}
          <Typography
            sx={{
              color: '#E30019',
              fontWeight: '600',
              textAlign: 'center',
              fontSize: '13px',
            }}
          >
            {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Typography>
        </Box>
      </FlexBetween>
      <Divider />
    </>
  );
};

export default OrderCard;

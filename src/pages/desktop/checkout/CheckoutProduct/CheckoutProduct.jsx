import { Badge, Box, Paper, Typography } from '@mui/material';
import React from 'react';

const CheckoutProduct = () => {
  return (
    <Paper sx={{ padding: '20px', border: '2px solid #ebebeb' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box sx={{ display: 'flex' }}>
          <Badge badgeContent={1} color="primary">
            <Box
              sx={{
                width: '82px',
                height: '82px',
                border: '1px solid #f3f3f3',
              }}
            >
              <img alt="1" src="./logo.png" style={{ width: '100%', height: 'auto', padding: '10px' }} />
            </Box>
          </Badge>

          <Typography
            sx={{
              fontWeight: '700',
              marginLeft: '20px',
            }}
          >
            Iphone 14 Promax
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontWeight: '600',
            }}
          >
            8.990.000đ
          </Typography>
          <Typography>x1</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box sx={{ display: 'flex' }}>
          <Badge badgeContent={1} color="primary">
            <Box
              sx={{
                width: '82px',
                height: '82px',
                border: '1px solid #f3f3f3',
              }}
            >
              <img alt="1" src="./logo.png" style={{ width: '100%', height: 'auto', padding: '10px' }} />
            </Box>
          </Badge>

          <Typography
            sx={{
              fontWeight: '700',
              marginLeft: '20px',
            }}
          >
            Iphone 14 Promax
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontWeight: '600',
            }}
          >
            8.990.000đ
          </Typography>
          <Typography>x1</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default CheckoutProduct;

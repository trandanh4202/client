import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import FlexBetween from '~/components/flexbetween/FlexBetween';

const DetailProduct = () => {
  const attributes = useSelector((state) => state.attributes.attributes);
  return (
    <>
      <Paper sx={{ padding: '10px' }}>
        <Typography sx={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>Thông tin chi tiết</Typography>
        {attributes.map((attribute, index) => (
          <Grid
            container
            sx={{
              backgroundColor: index % 2 === 0 ? 'rgb(246, 246, 246)' : 'white',
              padding: ' 10px',
            }}
          >
            <Grid item lg={6}>
              <Typography sx={{ fontSize: '13px', fontWeight: '500' }}>{attribute.name}</Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography sx={{ fontSize: '13px', fontWeight: '500' }}>{attribute.value}</Typography>
            </Grid>
          </Grid>
        ))}
      </Paper>
    </>
  );
};

export default DetailProduct;

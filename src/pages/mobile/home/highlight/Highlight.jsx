import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Highlight = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={1}>
        <Grid item xs={2.4} sx={{ overflow: 'hidden' }}>
          <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
            <img src="./images/highlight/Highlight_1.webp" style={{ objectFit: 'cover', width: '100%' }} />
            <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Màn hình</Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ overflow: 'hidden' }}>
          <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
            <img src="./images/highlight/Highlight_2.webp" style={{ objectFit: 'cover', width: '100%' }} />
            <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Chuột</Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ overflow: 'hidden' }}>
          <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
            <img src="./images/highlight/Highlight_3.webp" style={{ objectFit: 'cover', width: '100%' }} />
            <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>PC</Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ overflow: 'hidden' }}>
          <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
            <img src="./images/highlight/Highlight_4.webp" style={{ objectFit: 'cover', width: '100%' }} />
            <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Macbook</Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ overflow: 'hidden' }}>
          <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
            <img src="./images/highlight/Highlight_5.webp" style={{ objectFit: 'cover', width: '100%' }} />
            <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Laptop</Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ overflow: 'hidden' }}>
          <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
            <img src="./images/highlight/Highlight_6.webp" style={{ objectFit: 'cover', width: '100%' }} />
            <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Màn hình</Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ overflow: 'hidden' }}>
          <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
            <img src="./images/highlight/Highlight_7.webp" style={{ objectFit: 'cover', width: '100%' }} />
            <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Chuột</Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ overflow: 'hidden' }}>
          <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
            <img src="./images/highlight/Highlight_8.gif" style={{ objectFit: 'cover', width: '100%' }} />
            <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>PC</Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ overflow: 'hidden' }}>
          <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
            <img src="./images/highlight/Highlight_9.webp" style={{ objectFit: 'cover', width: '100%' }} />
            <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Macbook</Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ overflow: 'hidden' }}>
          <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
            <img src="./images/highlight/Highlight_10.webp" style={{ objectFit: 'cover', width: '100%' }} />
            <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Laptop</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Highlight;

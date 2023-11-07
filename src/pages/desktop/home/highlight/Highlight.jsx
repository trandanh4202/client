import { Box, Container, Grid, Paper, Typography, styled } from '@mui/material';
import React from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Highlight = () => {
  return (
    <Container
      sx={{
        backgroundColor: 'white',
        padding: { xs: '0', lg: '20px 10px' },
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
            fontSize: { xs: '26px' },
          }}
        >
          Sản phẩm nổi bật
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={1}>
            <Grid item xs={1} sx={{ overflow: 'hidden' }}>
              <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
                <img src="./images/highlight/Highlight_1.webp" style={{ objectFit: 'cover', width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Màn hình</Typography>
              </Paper>
            </Grid>
            <Grid item xs={1} sx={{ overflow: 'hidden' }}>
              <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
                <img src="./images/highlight/Highlight_2.webp" style={{ objectFit: 'cover', width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Chuột</Typography>
              </Paper>
            </Grid>
            <Grid item xs={1} sx={{ overflow: 'hidden' }}>
              <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
                <img src="./images/highlight/Highlight_3.webp" style={{ objectFit: 'cover', width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>PC</Typography>
              </Paper>
            </Grid>
            <Grid item xs={1} sx={{ overflow: 'hidden' }}>
              <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
                <img src="./images/highlight/Highlight_4.webp" style={{ objectFit: 'cover', width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Macbook</Typography>
              </Paper>
            </Grid>
            <Grid item xs={1} sx={{ overflow: 'hidden' }}>
              <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
                <img src="./images/highlight/Highlight_5.webp" style={{ objectFit: 'cover', width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Laptop</Typography>
              </Paper>
            </Grid>
            <Grid item xs={1} sx={{ overflow: 'hidden' }}>
              <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
                <img src="./images/highlight/Highlight_6.webp" style={{ objectFit: 'cover', width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Màn hình</Typography>
              </Paper>
            </Grid>
            <Grid item xs={1} sx={{ overflow: 'hidden' }}>
              <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
                <img src="./images/highlight/Highlight_7.webp" style={{ objectFit: 'cover', width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Chuột</Typography>
              </Paper>
            </Grid>
            <Grid item xs={1} sx={{ overflow: 'hidden' }}>
              <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
                <img src="./images/highlight/Highlight_8.gif" style={{ objectFit: 'cover', width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>PC</Typography>
              </Paper>
            </Grid>
            <Grid item xs={1} sx={{ overflow: 'hidden' }}>
              <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
                <img src="./images/highlight/Highlight_9.webp" style={{ objectFit: 'cover', width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Macbook</Typography>
              </Paper>
            </Grid>
            <Grid item xs={1} sx={{ overflow: 'hidden' }}>
              <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
                <img src="./images/highlight/Highlight_10.webp" style={{ objectFit: 'cover', width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Laptop</Typography>
              </Paper>
            </Grid>
            <Grid item xs={1} sx={{ overflow: 'hidden' }}>
              <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
                <img src="./images/highlight/Highlight_11.webp" style={{ objectFit: 'cover', width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Laptop</Typography>
              </Paper>
            </Grid>
            <Grid item xs={1} sx={{ overflow: 'hidden' }}>
              <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
                <img src="./images/highlight/Highlight_12.webp" style={{ objectFit: 'cover', width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>Laptop</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </FlexBetween>
    </Container>
  );
};

export default Highlight;

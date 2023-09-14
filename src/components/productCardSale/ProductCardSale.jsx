import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  LinearProgress,
  Rating,
  Typography,
} from '@mui/material';
import FlexBetween from '../flexbetween/FlexBetween';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Link } from 'react-router-dom';

const ProductCardSale = (props) => {
  const { title, description } = props;
  return (
    <Card
      sx={{
        // maxWidth: 300,

        '&:hover .MuiCardMedia-media': {
          transform: 'translateY(-10%)',
        },
        padding: '20px',
        position: 'relative',
      }}
      component={Link}
      to="/product"
    >
      <CardMedia
        component="img"
        height="auto"
        image="./logo.png"
        alt="green iguana"
        sx={{
          transition: 'all 300ms ease-in-out',
        }}
      />
      <CardContent sx={{ padding: '0px', marginBottom: '15px' }}>
        <Typography gutterBottom sx={{ color: '#333333', fontWeight: '600' }}>
          Iphone 14 pro max
        </Typography>
        <Typography
          gutterBottom
          color="grey"
          sx={{
            textDecorationLine: 'line-through',
          }}
        >
          4.000.000 đ
        </Typography>
        <FlexBetween sx={{ marginBottom: '10px' }}>
          <Typography
            sx={{
              color: '#E30019',
              fontWeight: '600',
              fontSize: '18px',
            }}
          >
            3.000.000 đ
          </Typography>
          <Typography
            variant="span"
            color="error"
            sx={{
              border: '1px solid red',
              padding: '2px',
              backgroundColor: '#f5d3d3',
              color: '#E30019',
              fontWeight: '600',
            }}
          >
            -25%
          </Typography>
        </FlexBetween>

        <Box
          sx={{
            border: '1px solid grey',
            borderRadius: '15px',
            position: 'relative',
            overflow: 'hidden',
            height: '20px',
            backgroundColor: '#FF8D9B',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#E30019',
              position: 'relative',
              height: '100%',
              width: '50%',
              borderRadius: '15px',
            }}
          >
            <img
              alt="1"
              style={{
                position: 'absolute',
                top: '0',
                left: '5px',
                height: '18px',
              }}
              src="./fire.svg"
            />
          </Box>
          <Typography
            sx={{
              textAlign: 'center',
              width: '100%',
              height: '100%',
              color: 'rgb(255,255,255)',
              position: 'absolute',
              top: '0',
              fontWeight: '600',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Đã bán: 20
          </Typography>
        </Box>
      </CardContent>
      <img
        alt="1"
        src="./khung.webp"
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: '0px',
          left: '0px',
        }}
      />
    </Card>
  );
};

export default ProductCardSale;

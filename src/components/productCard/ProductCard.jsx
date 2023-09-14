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

const ProductCard = (props) => {
  const { title, description } = props;
  return (
    <Card
      sx={{
        // maxWidth: 300,
        boxShadow:
          '-4px 7px 7px 0px rgba(0,0,0,0.2), 4px -3px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        '&:hover img': {
          transform: 'translateY(-10%)',
        },
        paddingTop: '10px',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image="./logo.png"
          alt="green iguana"
          sx={{
            transition: 'all 300ms ease-in-out',
          }}
        />
        <CardContent>
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
          <FlexBetween gutterBottom>
            <Typography
              sx={{
                color: '#E30019',
                fontWeight: '600',
                fontSize: '18px',
              }}
            >
              3.000.000đ
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
          <Rating
            value="1"
            readOnly
            sx={{
              marginBottom: '10px',
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;

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
import { Link } from 'react-router-dom';

const ProductCard = ({ gridView }) => {
  // const { gridView } = props;
  return (
    <Card
      sx={{
        boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)',
        '&:hover img': {
          transform: 'translateY(-10%)',
          transition: 'all 0.5s ease-in-out',
        },
      }}
    >
      <CardActionArea
        sx={{
          padding: '16px',

          ...(gridView === 12
            ? {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'normal',
              }
            : {}),
        }}
        component={Link}
        to="/singleproduct"
      >
        <CardMedia
          component="img"
          height="140px"
          image="./logo.png"
          alt="green iguana"
          sx={{
            objectFit: 'contain',
            width: 'auto',
          }}
        />

        <CardContent sx={{ padding: '8px', overflow: 'hidden' }}>
          <Typography
            gutterBottom
            sx={{
              color: '#333333',
              fontWeight: '600',
              fontSize: '15px',
              display: '-webkit-box',
              WebkitLineClamp: 2, // Giới hạn tối đa 2 dòng
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Iphone 14 pro maxaaaaaaaaaaaaaaaaaaaaaaaaaa Iphone 14 pro maxaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Typography>
          <Typography
            gutterBottom
            color="grey"
            sx={{
              textDecorationLine: 'line-through',
              fontSize: '13px',
            }}
          >
            4.000.000 đ
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              sx={{
                color: '#E30019',
                fontWeight: '600',
                fontSize: { xs: '17px', lg: '18px' },
                marginRight: '5px',
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
                fontSize: { xs: '10px', lg: '13px' },
              }}
            >
              -25%
            </Typography>
          </Box>
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

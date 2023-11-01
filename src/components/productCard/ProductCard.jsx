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

const ProductCard = (props) => {
  const { imageUrl, name, basePrice, price, percentSale, averageRating, gridView } = props;
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
      <CardContent>
        <Box sx={{ textAlign: 'left' }} component={Link} to="/singleproduct">
          <Box
            sx={{
              position: 'relative',
              ...(gridView === 12
                ? {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'normal',
                  }
                : {}),
            }}
          >
            <Box>
              <CardMedia
                component="img"
                image={imageUrl}
                alt={name}
                sx={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '120px',
                  ...(gridView === 12
                    ? {
                        padding: '6px',
                        width: '120px',
                      }
                    : {}),
                }}
              />
            </Box>
            <Box sx={{ position: 'absolute', bottom: '0', left: '0' }}>
              <Box
                sx={{
                  background: 'url(./sale.svg) 0% 0% /cover no-repeat',
                  backgroundRepeat: 'no-repeat',
                  padding: '4px',
                  borderRadius: '5px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <Typography sx={{ fontSize: '10px', fontWeight: '700', color: 'rgb(255, 213, 145)' }}>
                  Tiết kiệm
                </Typography>
                <Typography sx={{ fontSize: '13px', fontWeight: '700', color: 'white' }}>
                  {basePrice - price}đ
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{}}>
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
                height: '50px',
              }}
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              color="grey"
              sx={{
                textDecorationLine: 'line-through',
                fontSize: '13px',
              }}
            >
              {basePrice} đ
            </Typography>
            <FlexBetween sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                sx={{
                  color: '#E30019',
                  fontWeight: '600',
                  fontSize: { xs: '17px', lg: '18px' },
                  marginRight: '5px',
                }}
              >
                {price} đ
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
                {percentSale?.toFixed(0)}%
              </Typography>
            </FlexBetween>
            <Rating
              value={averageRating}
              readOnly
              sx={{
                marginBottom: '10px',
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

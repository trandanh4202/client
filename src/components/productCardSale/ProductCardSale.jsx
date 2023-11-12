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
export const formatStringToMoney = (str) => {
  const stringFormat = typeof str === 'string' ? parseInt(str, 10) : str;
  const result = stringFormat?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).slice(0, -3);
  return (isNaN(parseFloat(result)) ? '0 ' : result) + 'đ';
};
const ProductCardSale = (props) => {
  const { id, imageUrl, name, basePrice, price, percentSale, quantity, soldQuantity } = props;
  return (
    <Card
      sx={{
        '&:hover .MuiCardMedia-media': {
          transform: 'translateY(-10%)',
        },
        padding: '20px',
        position: 'relative',
      }}
      component={Link}
      to={id}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={name}
        sx={{
          transition: 'all 300ms ease-in-out',
          height: '120px',
          width: '100%',
          objectFit: 'contain',
        }}
      />
      <CardContent sx={{ padding: '0px', marginBottom: '15px' }}>
        <Typography
          gutterBottom
          sx={{
            color: '#333333',
            fontWeight: '600',
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
          }}
        >
          {formatStringToMoney(basePrice)}
        </Typography>
        <FlexBetween sx={{ marginBottom: '10px' }}>
          <Typography
            sx={{
              color: '#E30019',
              fontWeight: '600',
              fontSize: '18px',
            }}
          >
            {formatStringToMoney(price)}
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
              fontSize: '10px',
            }}
          >
            {percentSale.toFixed(0)}%
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
              width: `${(soldQuantity / quantity) * 100}%`,
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
            Đã bán: {soldQuantity}
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

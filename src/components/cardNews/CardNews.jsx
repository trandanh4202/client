import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CardNews = (props) => {
  const { title, description } = props;

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow:
          '2px 5px 4px 1px rgba(0,0,0,0.2), 2px 6px 10px 0px rgba(0,0,0,0.14), 0px 4px 10px 2px rgba(0,0,0,0.12)',
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'all 0.3s ease-in-out',
        },
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'normal',
          flexDirection: 'column',
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
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2, // Giới hạn tối đa 2 dòng
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Ra mắt iphone 15 promax
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2, // Giới hạn tối đa 2 dòng
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            ngày 30/9 ra mắt iphone 15 promax
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardNews;

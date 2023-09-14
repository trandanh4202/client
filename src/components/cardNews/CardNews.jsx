import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

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
        },
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image="./logo.png" alt="green iguana" />
        <CardContent>
          {/* <Typography gutterBottom variant="h6">
            ngày 23 tháng 05 năm 2023
          </Typography> */}
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardNews;

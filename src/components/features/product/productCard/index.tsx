import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ProductCard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 340 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Apollo Running Short
          </Typography>
          <Typography variant="body2" color="text.secondary">
            200$
          </Typography>
        </CardContent>
        
      </Card>
    </div>
  );
};

export default ProductCard;
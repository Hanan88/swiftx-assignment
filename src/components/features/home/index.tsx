import { gql, useQuery } from '@apollo/client';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
// import ProductCard from './../product/productCard/index';

const Home = () => {

  const ALL_PRODUCTS = gql`
  query products{
    category{
      name,
      products{
        name,
        inStock,
        gallery,
        description,
        category,
        brand,
        prices{
          amount,
          currency{
            label,
            symbol
          }
        }
      }
    }
  }`;
  const { loading, error, data } = useQuery(ALL_PRODUCTS);

  return (
    <div className='container d-flex justify-content-start align-items-start flex-wrap'>
      {data?.category?.products.length > 0 ? data?.category?.products.map((item: any) => (
        // eslint-disable-next-line react/jsx-key
        <Card sx={{ maxWidth: 340 }} key={item.id} className='w-50 float-start m-3'>
          <CardMedia
            component="img"
            className='w-100 p-2'
            height="300"
            image={item.gallery[0]}
            alt="green iguana"
          />
          <CardContent className='text-start'>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.prices[0].amount}{item.prices[0].currency.symbol}
            </Typography>
          </CardContent>

        </Card>
      )) : 'No Data'}


    </div>
  );
};

export default Home;
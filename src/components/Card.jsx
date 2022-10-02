import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function Cards() {

  return (
    <Card sx={{ display: 'flex' , width:'400px', height:'150px',margin:'10px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt inventore delectus qui, aperiam minima sit ullam iste iure facilis voluptatem quasi asperiores totam ipsam quas quod a quaerat, recusandae natus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid voluptatum dicta veritatis possimus, quis modi voluptates consequuntur magnam perspiciatis? Doloremque nemo laboriosam eos, ad eius possimus quis temporibus quas fugiat.
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="logo192.png"
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default Cards
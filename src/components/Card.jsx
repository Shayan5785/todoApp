import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Cards( { title,desciption,img } ) {
  return (
    <Card sx={{ display: 'flex' , width:'400px', height:'150px',margin:'10px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {desciption.slice(0,70) + "..."}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={img}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default Cards
import React from 'react';
import {Card,Box,CardActions,CardContent,Typography,CardMedia,CardHeader} from '@mui/material'
function CustomCard({image}) {
    return (
      <Box sx={{ height:"30%",width:320}}>
        <Card sx={{mb:{
          lg:3,
          md:3,
          sm:1,
          xs:1
        }, mx:2}} elevation={1}>   
   
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt=""
        />
      </Card>
      </Box>
    );
}

export default CustomCard;
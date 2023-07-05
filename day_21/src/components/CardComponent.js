import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardActionArea,
    CardMedia
  } from "@mui/material";

const CardComponent = (props) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
      <CardActionArea>
      <CardMedia
          component="img"
          height={275}
          image= {props.image} //"https://assetsio.reedpopcdn.com/naruto-watch-order.jpg"
          sx = {{ objectFit: 'cover' }}
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
    </div>
  )
}

export default CardComponent

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
      <Card sx={{ minWidth: props.width }}>
      <CardActionArea>
      <CardMedia
          component="img"
          height={props.height}
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

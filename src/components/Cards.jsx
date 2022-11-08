import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Cards({title, excerpt, src}) {
  return (
    <Card sx={{ maxWidth: 250, height:350 }} style={{backgroundColor: "#262626"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={src}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{color:"white", fontWeight:"bold",marginBottom:"5px"}}>
           {title}
          </Typography>
          <hr/>
          <Typography variant="body2" style={{color:"white", marginTop:"15px"}}>
           {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

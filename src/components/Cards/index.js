import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';


export default function Cards(props) {
  return (
    <Card className='card' sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        
       {props.image &&
         <CardMedia
         component="img"
         height="140"
         image={props.image}
         alt={props.imgdesc}
       />
       }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider style={{marginBottom: 10}}/>

      {props.footer || ''}

    </Card>
    
  );
}


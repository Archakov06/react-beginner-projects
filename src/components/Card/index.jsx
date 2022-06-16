import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React from 'react';

import styles from './Card.module.scss';

export const MovieCard = ({ id, title, imageUrl, description }) => {
  return (
    <Card className={styles.root}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={imageUrl} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {title.substr(0, 23)}...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.substr(0, 100)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

import React from 'react';
import {Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';

const News = (props) => {
    const {title, description, urlToImage} = props.article;
    return (
        <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 140 }}
        image={urlToImage}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    );
};

export default News;
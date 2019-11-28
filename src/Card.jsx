import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function CardComp(props) {
  const classes = styles();
  
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={props.image || "https://source.unsplash.com/random"}
        title={props.imageTitle || "random image"}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h5">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          {props.subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="more info">
          <InfoIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
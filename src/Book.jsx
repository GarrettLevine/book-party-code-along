import React, { useEffect, useState, useRef } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  bookContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  textPadding: {
    paddingTop: theme.spacing(2),
  }
}));

export default function Book(props) {
  const book = {
    title: 'wow',
    authorName: 'wow',
    rating: 1,
    comment: 'great book',
  };
  return (
    <Container className={classes.bookContainer}>
      <Grid container spacing={2}>
        <Grid item>
          <image className={classes.img} src="https://source.unsplash.com/800x600" />
        </Grid>
        <Grid item>
          <Typography className={classes.textPadding} component="h2" variant="h2" align="left" color="textPrimary">
            {book.title}
          </Typography>
          <Typography className={classes.textPadding} component="h3" variant="subtitle" align="left" color="textPrimary">
            By {book.authorName}
          </Typography>
          <span>Rating: {book.rating}/5</span>
          <Typography className={classes.textPadding} component="p" variant="body1" align="left" color="textPrimary">
            {book.comment}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Card from './Card';

const styles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Main(props) {
  const [ books, updateBooks ] = useState([]);
  const mainRef = useRef(false);
  const classes = styles();

  async function getBooks() {
    const resp = await fetch('/api/books');
    const books = await resp.json();
    if (!mainRef.current) {
      updateBooks(books.data);
      mainRef.current = true;
    }
  }

  function pushToBook(id) {
    props.history.push(`/book/${id}`)
  }

  useEffect(() => {
    try {
        getBooks();
      } catch (ex) {
        console.log(ex);
      }
  });

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Books are a party.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      props.history.push('/create');
                    }}
                  >
                    Add a book
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h3" align="left" color="textSecondary" paragraph>
          My books
        </Typography>
        <Grid container spacing={4}>
          {books.map(book => (
            <Grid key={book._id}  item  xs={12} sm={6} md={4}>
              <Card id={book._id} title={book.title} subtitle={book.authorName} onClick={pushToBook} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
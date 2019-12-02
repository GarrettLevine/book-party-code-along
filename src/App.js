import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import BookIcon from '@material-ui/icons/Book';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


import Book from "./Book";
import Main from "./Main";
import Form from "./Form";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export default function App() { 
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="relative">
      <Toolbar>
        <BookIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Book Party
        </Typography>
      </Toolbar>
    </AppBar>
    <Router>
      <Switch>
        <Route
          exact
          path="/create"
          component={Form}
        />
        <Route
          exact
          path="/"
          component={Main}
        />
        <Route
          exact
          path="/book/:id"
          component={Book}
        />
      </Switch>
    </Router>
    <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Reading is fun
        </Typography>
      </footer>
    </div>
    );
}
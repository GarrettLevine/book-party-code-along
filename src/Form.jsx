import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(8, 0, 6),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  buttonField: {
    marginTop: theme.spacing(1),
  },
}));

export default function Form() {
  const classes = useStyles();
  return (
    <Container className={classes.content} maxWidth="md">
      <form>
        <div>
          <Typography component="h6" variant="h6" align="left" color="textPrimary">
            Add a Book
          </Typography>
        </div>
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="Author Name"
            multiline
            rowsMax="2"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Book Title"
            multiline
            rowsMax="2"
            className={classes.textField}
            margin="normal"
          />
        </div>
        <div>
          <Button
            className={classes.buttonField}
            size="small"
            variant="outlined"
            color="primary"
          >
            Add Book
          </Button>
        </div>
      </form>
    </Container>
  );
}
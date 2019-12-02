import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);


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

export default function Form(props) {
  const classes = useStyles();
  const [rating, updateRating] = useState(1);

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
          <FormControl>
            <InputLabel shrink htmlFor="select-multiple-native">
              Rating
            </InputLabel>
            <NativeSelect
            id="demo-customized-select-native"
            value={rating}
            onChange={(e) => {updateRating(e.target.value);}}
            input={<BootstrapInput />}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="comment"
            multiline
            rowsMax="4"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <Button
              className={classes.buttonField}
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => {
                props.history.push("/");
              }}
            >
            Add Book
          </Button>
        </div>
      </form>
    </Container>
  );
} 
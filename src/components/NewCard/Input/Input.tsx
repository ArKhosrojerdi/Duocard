import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
  }),
);

type InputProps = {
  label: string;
  placeholder: string;
  error: boolean;
  handler?: any;
  input?: any;
}

function Input(props: InputProps) {
  const classes = useStyles();

  return (
    <FormControl className={classes.margin}>
      <TextField
        id="outlined-multiline-static"
        label={props.label}
        multiline
        rows={3}
        placeholder={props.placeholder}
        variant="outlined"
        onChange={props.input}
        error={props.error}
      />
    </FormControl>
  )
}

export default Input;

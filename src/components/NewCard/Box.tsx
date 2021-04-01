import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from './Input/Input';
import {CardHeader} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 220,
    boxShadow: "0 2px 6px rgba(191, 191, 191, .65)",
  },
  title: {
    fontSize: 10,
    padding: 0,
  },
  pos: {
    marginBottom: 4,
  },
  actions: {
    margin: "auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
});

type Props = {
  label: string;
  placeholder: string;
  error: boolean;
  input?: any;
}

function Box(props: Props) {
  const classes = useStyles();

  return (
    <MuiCard className={classes.root} variant={"outlined"}>
      <CardContent>
        <CardHeader className={classes.title} title={props.label} titleTypographyProps={{variant: 'h6'}}/>
        <Input
          input={props.input}
          label={props.label}
          placeholder={props.placeholder}
          error={props.error}
        />
      </CardContent>
    </MuiCard>
  );
}

export default Box;

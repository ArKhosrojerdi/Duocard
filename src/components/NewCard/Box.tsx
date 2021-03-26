import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Input from './Input/Input';
import Languages from './Languages/Languages';
import WordType from './WordType/WordType';
import Misc from "../../hoc/Misc/Misc";
import {Language} from "../../types/Language";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: "0 2px 8px rgba(127, 127, 127, .5)",
  },
  title: {
    fontSize: 14,
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

type Errors = {
  text: boolean;
  lang?: boolean;
  pos?: boolean;
}

type NewCardProps = {
  label: string;
  placeholder: string;
  error: Errors;
  isWord?: boolean;
  input?: any;
  language?: string;
  pos: string;
  langHandler?: any;
  lang?: number;
  langs?: Language[];
  posHandler?: any;
}

function NewCard(props: NewCardProps) {
  const classes = useStyles();

  return (
    <MuiCard className={classes.root} variant={"outlined"}>
      <CardContent>
        <Typography variant="h6">{props.label}</Typography>
        <Input
          input={props.input}
          label={props.label}
          placeholder={props.placeholder}
          error={props.error.text}
        />
      </CardContent>

      <CardActions className={classes.actions}>
        {props.isWord ?
          <Misc>
            <Languages
              langHandler={props.langHandler}
              lang={props.lang}
              error={props.error.lang ? props.error.lang : false}
            />
            <WordType
              error={props.error.pos ? props.error.pos : false}
              pos={props.pos}
              posHandler={props.posHandler}
            />
          </Misc>
          :
          null
        }
      </CardActions>
    </MuiCard>
  );
}

export default NewCard;

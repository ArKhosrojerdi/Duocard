import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import MuiSelect from "@material-ui/core/Select";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import * as WORD_TYPES from "../../../types/WordTypes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginBottom: theme.spacing(1),
      minWidth: 90,
      textAlign: 'left',
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  }),
);

type WordTypeProps = {
  error: boolean;
  pos: string;
  posHandler: any;
}

function PoS(props: WordTypeProps) {
  const classes = useStyles();

  return (
    <FormControl error={props.error} variant="standard" size="small" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">POS</InputLabel>
      <MuiSelect
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={props.pos}
        onChange={props.posHandler}
        label="Part of Speech"
      >
        {WORD_TYPES.TYPES.map(
          (wordType: string, index: number) =>
            <MenuItem
              key={index}
              value={wordType}
            >
              {wordType}
            </MenuItem>
        )}
      </MuiSelect>
    </FormControl>
  );
}

export default PoS;

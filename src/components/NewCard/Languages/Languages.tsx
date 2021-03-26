import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import MuiSelect from "@material-ui/core/Select";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginBottom: theme.spacing(1),
      minWidth: 120,
      textAlign: 'left'
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  }),
);

type Lang = {
  id: number;
  ln: string;
}

type LanguageProps = {
  langHandler?: any;
  lang?: number;
  langs?: Lang[];
  error: boolean;
}

function Languages(props: LanguageProps) {
  const classes = useStyles();

  const langs = (
    props.langs ?
      props.langs.map((lang: Lang) =>
        <MenuItem
          key={lang.id}
          value={lang.id}>{lang.ln}
        </MenuItem>
      )
      : null
  );

  return (
    <FormControl error={props.error} variant="standard" size="small" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Language</InputLabel>
      <MuiSelect
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={props.lang}
        onChange={props.langHandler}
        label="Language"
      >
        {langs}
      </MuiSelect>
    </FormControl>
  );
}

export default Languages;

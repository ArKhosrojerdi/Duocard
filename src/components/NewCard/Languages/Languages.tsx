import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import MuiSelect from "@material-ui/core/Select";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {IRootState} from "../../../store";
import {connect} from "react-redux";

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
  name: string;
}

type Props = IRootState & {
  langHandler: any;
  lang: number;
  error: boolean;
}

function Languages(props: Props) {
  const classes = useStyles();

  const languages = (
    props.languages ?
      props.languages.map((lang: Lang) =>
        <MenuItem
          key={lang.id}
          value={lang.id}>{lang.name}
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
        {languages}
      </MuiSelect>
    </FormControl>
  );
}

const mapStateToProps = (state: IRootState) => state;

export default connect(mapStateToProps)(Languages);
